
# Projeto React Native com Renderização 3D

Este projeto é um aplicativo React Native que permite o login do usuário, renderização de objetos 3D e customização desses objetos. A arquitetura do projeto segue o padrão Feature-Sliced Architecture para manter o código modular, escalável e fácil de manter.

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando o Projeto](#executando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado. [Download Node.js](https://nodejs.org/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
   ```

2. Instale as dependências:

   ```bash
   yarn
   ```

## Configuração

1. **Configuração do Firebase**:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Adicione uma aplicação web ao seu projeto Firebase e copie as configurações.
   - Coloque essas configurações no arquivo de ambiente localizado em `environment` ou diretamente no `.env`, conforme a estrutura do projeto.

## Executando o Projeto

Para iniciar o projeto no modo de desenvolvimento, execute o comando:

```bash
yarn start
```

Após o comando, um QR code aparecerá no console ou no painel do Expo. Escaneie o QR code com o aplicativo Expo Go no seu celular. Certifique-se de que o modo de desenvolvedor esteja habilitado no seu dispositivo.

## Estrutura do Projeto

- **`assets/`**: Armazena recursos estáticos, como imagens e ícones.
- **`components/`**: Agrupa componentes reutilizáveis, facilitando sua utilização em diversas partes da aplicação.
- **`config/`**: Centraliza configurações para serviços externos e constantes globais.
- **`context/`**: Gerencia o estado global, como o estado do usuário, usando a Context API.
- **`hook/`**: Hooks customizados que encapsulam lógica reutilizável.
- **`interface/` e `types/`**: Tipagem em TypeScript para consistência e melhor autocompletagem.
- **`pages/`**: Páginas da aplicação, organizadas por pasta para melhor estruturação.
- **`routes/`**: Centraliza a configuração de rotas para fácil manutenção.
- **`util/`**: Utilitários específicos, como manipulação de objetos 3D.
- **`tests/`**: Testes automatizados organizados em uma pasta separada.
- **`environment/`**: Utilizado para armazenar as configurações do projeto, como variáveis de ambiente e credenciais.

---

Este projeto utiliza o padrão **Feature-Sliced Architecture** para uma organização modular e escalável.
