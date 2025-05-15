# Apresent

## Descrição
**Apresent** é um projeto simples para gerenciar e exibir apresentações em HTML. Ele consiste em uma página principal que lista links para apresentações individuais, cada uma contida em seu próprio arquivo HTML. As apresentações são organizadas em pastas separadas para facilitar a manutenção e escalabilidade. O projeto não utiliza frameworks, sendo construído apenas com HTML puro, e é hospedado no Vercel para deploy rápido e confiável.

## Estrutura do Projeto
```
apresent/
├── apresentacoes/
│   ├── apresentacao1/
│   │   └── index.html
│   ├── apresentacao2/
│   │   └── index.html
│   └── ...
├── index.html
├── README.md
└── .gitignore
```

- **index.html**: Página principal com links para todas as apresentações.
- **apresentacoes/**: Diretório que contém subpastas para cada apresentação, cada uma com seu próprio `index.html`.
- **.gitignore**: Ignora arquivos desnecessários, como `node_modules` (caso sejam adicionados no futuro) e arquivos temporários.

## Como Usar
1. **Navegação**: Abra o arquivo `index.html` no navegador para acessar a página principal. Clique nos links para visualizar as apresentações.
2. **Adicionar uma Apresentação**:
   - Crie uma nova pasta dentro de `apresentacoes/` com o nome da apresentação (ex.: `apresentacao3/`).
   - Adicione um arquivo `index.html` dentro dessa pasta com o conteúdo da apresentação.
   - Atualize o `index.html` principal com um link para a nova apresentação.
3. **Deploy no Vercel**:
   - Faça o push do repositório para o GitHub.
   - Conecte o repositório ao Vercel via painel de controle.
   - Configure o diretório raiz como `/` e o Vercel cuidará do deploy automaticamente.

## Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, etc.).
- Conta no Vercel para deploy.
- Git e GitHub para versionamento.

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/apresent.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd apresent
   ```
3. Abra o arquivo `index.html` em um navegador ou faça o deploy no Vercel.

## Deploy no Vercel
1. Crie uma conta no [Vercel](https://vercel.com/).
2. Conecte seu repositório do GitHub ao Vercel.
3. Configure o projeto com as seguintes opções:
   - **Framework Preset**: Nenhum (projeto estático).
   - **Root Directory**: `/`.
4. Faça o deploy e obtenha a URL pública.

## Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça o push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato
Para dúvidas ou sugestões, abra uma issue no repositório ou entre em contato pelo GitHub.