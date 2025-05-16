# Apresent

## Descrição
**Apresent** é um projeto para gerenciar e exibir apresentações em HTML, com uma interface web protegida por senha. A página principal lista links para apresentações individuais, organizadas em pastas separadas, cada uma com seu próprio arquivo HTML. O projeto utiliza Node.js com Express para autenticação e é hospedado no Vercel para deploy rápido e confiável. Inclui funcionalidades como geração de QR codes para acesso móvel e estilização com CSS.

## Estrutura do Projeto
```
apresent/
├── public/
│   ├── apresentacoes/
│   │   ├── EstruturaDeDados/
│   │   ├── ProgramacaoWeb/
│   │   │   ├── index.html
│   │   │   ├── funcionalidades.html
│   │   │   ├── tecnologias.html
│   │   │   └── instalacao.html
│   │   ├── Requisitos/
│   │   │   ├── index.html
│   │   │   ├── elementos.html
│   │   │   ├── forma-uso.html
│   │   │   ├── exemplo.html
│   │   │   ├── beneficios.html
│   │   │   ├── conclusao.html
│   │   │   └── *.png/pdf (diagramas e seminário)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .env
├── .gitignore
├── package.json
├── server.js
├── vercel.json
└── README.markdown
```

- **public/index.html**: Página principal com links para apresentações.
- **public/apresentacoes/**: Contém subpastas com apresentações individuais.
- **public/style.css**: Estilização da interface.
- **public/script.js**: Lógica para QR codes e interatividade.
- **server.js**: Servidor Express com autenticação por senha.
- **.env**: Armazena a senha de acesso.
- **vercel.json**: Configuração para deploy no Vercel.
- **.gitignore**: Ignora `.env`, `node_modules` e arquivos temporários.

## Como Usar
1. **Acessar a Aplicação**:
   - Abra a URL do deploy no Vercel ou rode localmente.
   - Insira a senha definida em `.env` (ACCESS_PASSWORD).
   - Navegue pela página principal para acessar as apresentações.
2. **Adicionar uma Apresentação**:
   - Crie uma nova pasta em `public/apresentacoes/` (ex.: `NovaApresentacao/`).
   - Adicione um ou mais arquivos HTML na pasta.
   - Atualize `public/index.html` com links para a nova apresentação.
3. **Gerar QR Code**:
   - Clique em um item da lista na página principal para expandi-lo e exibir o QR code, que permite acesso móvel à apresentação.

## Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, etc.).
- Node.js (v16 ou superior) para execução local.
- Conta no Vercel para deploy.
- Git e GitHub para versionamento.

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/DadosCoelho/Apresent.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd apresent
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Crie um arquivo `.env` com a senha de acesso:
   ```bash
   echo "ACCESS_PASSWORD=sua_senha" > .env
   ```
5. Inicie o servidor local:
   ```bash
   npm start
   ```
6. Abra `http://localhost:3000` no navegador.

## Deploy no Vercel
1. Crie uma conta no [Vercel](https://vercel.com/).
2. Conecte o repositório do GitHub ao Vercel.
3. Configure o projeto:
   - **Framework Preset**: Nenhum (Node.js).
   - **Root Directory**: `/`.
   - Adicione a variável de ambiente `ACCESS_PASSWORD` no painel do Vercel.
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
Para dúvidas ou sugestões, abra uma issue no repositório ou entre overlaid com [DadosCoelho](https://github.com/DadosCoelho).