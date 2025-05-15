// Biblioteca QRCode.js via CDN (já estava aqui)

// Adiciona um listener de clique a cada item da lista de apresentações
document.querySelectorAll('.presentation-item').forEach(item => {
    item.addEventListener('click', function(event) {
        // Verifica se o clique não foi diretamente no link
        if (!event.target.closest('.presentation-link')) {

            const wasExpanded = this.classList.contains('expanded');
            const qrContainer = this.querySelector('.qr-container');

            // --- NOVA LÓGICA: Esconder outros itens se este for expandido ---
            // Se o item clicado NÃO estava expandido (ou seja, será expandido agora)
            if (!wasExpanded) {
                // Itera sobre TODOS os itens da lista
                document.querySelectorAll('.presentation-item').forEach(otherItem => {
                    // Se o item atual na iteração NÃO é o item que foi clicado
                    if (otherItem !== this) {
                        // Adiciona a classe 'hidden' para escondê-lo
                        otherItem.classList.add('hidden');
                        // Garante que o QR Code de outros itens esteja escondido e limpo
                        const otherQrContainer = otherItem.querySelector('.qr-container');
                        if (otherQrContainer) {
                            otherQrContainer.classList.remove('active');
                            otherQrContainer.innerHTML = ""; // Limpa o conteúdo do QR Code
                        }
                        // Remove a classe 'expanded' de outros itens (redundante com o hidden, mas boa prática)
                        otherItem.classList.remove('expanded');
                    }
                });
            }
            // --- FIM DA NOVA LÓGICA ---


            // Alterna a classe 'expanded' no item clicado
            // Se ele já estava expandido, ele será recolhido
            // Se não estava, ele será expandido
            this.classList.toggle('expanded');

            // Se o item foi expandido AGORA (não estava expandido antes)
            if (this.classList.contains('expanded') && !wasExpanded) {
                // Encontra o link dentro deste item para pegar a URL
                const presentationLink = this.querySelector('.presentation-link');
                const url = presentationLink ? presentationLink.getAttribute('data-url') : null;

                if (url && qrContainer) {
                    console.log("Gerando QR Code para URL:", url);
                    // Limpa o contêiner antes de gerar
                    qrContainer.innerHTML = "";

                    // Cria uma nova instância do QRCode
                    new QRCode(qrContainer, {
                        text: url,
                        width: 250,   // Aumente aqui
                        height: 250,  // E aqui
                        correctLevel: QRCode.CorrectLevel.L
                    });

                    // Adiciona a mensagem abaixo do QR Code
                    const message = document.createElement('p');
                    message.textContent = 'Escaneie para acessar no dispositivo móvel';
                    qrContainer.appendChild(message);

                    // Ativa a exibição do contêiner com a animação
                    qrContainer.classList.add('active');
                } else {
                    console.error("Erro: URL ou contêiner de QR Code não encontrado.");
                    if(qrContainer) {
                        qrContainer.innerHTML = "<p style='color:red;'>Erro ao gerar QR Code.</p>";
                        qrContainer.classList.add('active');
                    }
                }
            } else if (!this.classList.contains('expanded') && wasExpanded) {
                // Se o item foi recolhido AGORA (estava expandido antes)
                if (qrContainer) {
                    // Esconde o QR Code
                    qrContainer.classList.remove('active');
                    // Limpa o conteúdo do QR Code ao recolher
                    qrContainer.innerHTML = "";
                }

                // --- NOVA LÓGICA: Mostrar todos os itens quando este for recolhido ---
                // Itera sobre TODOS os itens da lista novamente
                document.querySelectorAll('.presentation-item').forEach(otherItem => {
                    // Remove a classe 'hidden' de todos eles para torná-los visíveis
                    otherItem.classList.remove('hidden');
                });
                // --- FIM DA NOVA LÓGICA ---
            }
            // Se o item já estava expandido e foi clicado novamente (para recolher),
            // o toggle já removeu a classe 'expanded' e a lógica acima cuidará de esconder o QR.
            // Se o item já estava expandido e o clique foi no link (tratado abaixo),
            // a propagação será parada e esta lógica não será executada.
        }
    });
});

// Opcional: Adicionar um listener para o link para garantir que ele funcione
// e não acione a lógica de expansão/recolhimento do item pai.
// Embora o `!event.target.closest('.presentation-link')` no listener do item já ajude,
// adicionar um stopPropagation no link é uma camada extra de segurança.
document.querySelectorAll('.presentation-link').forEach(link => {
    link.addEventListener('click', function(event) {
        // Permite que o link navegue normalmente
        // event.stopPropagation(); // Descomente se quiser impedir que o clique no link feche outros itens
    });
});
