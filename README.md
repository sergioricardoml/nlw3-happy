<h1 align="center">
  <br>
  <img alt="Happy" src="https://raw.githubusercontent.com/sergioricardoml/next-level-week-3/master/img-github/happy-logo.png" width="200px">
</h1>

<h4 align="center">O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz. 💜</h4>

<p align="center">
  <img alt="Linguagem mais usada JavaScript/TypeScript" src="https://img.shields.io/github/languages/top/sergioricardoml/next-level-week-3?style=flat">
  <img alt="Objetivo: estudo" src="https://img.shields.io/badge/purpose-study-lightgrey?style=flat">
  <a href="https://rocketseat.com.br/">
    <img alt="Feito por: Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-blueviolet?style=flat">
  </a>
</p>

<p align="center">
  <a href="#recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#créditos">Créditos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/sergioricardoml/next-level-week-3/master/img-github/happy.png" width=100%>
</p>

## Recursos
- Cadastro de casas de acolhimento institucional;
- Listar casas de acolhimento institucional cadastradas no mapa;
- Detalhar as informações de casas de acolhimento institucional para visitas.

## Instalação
O pacote de gerenciamento utilizado para a instalação é o [Yarn](https://yarnpkg.com/). Em sua linha de comando:

```bash
# Clone o repositório
$ git clone https://github.com/sergioricardoml/next-level-week-3.git

# Entre no repositório
$ cd next-level-week-3

# Instale as dependências dentro do diretório backend
$ cd backend
$ yarn

# Instale as dependências dentro do diretório web
$ cd web
$ yarn

# Instale as dependências dentro do diretório mobile
$ cd mobile
$ yarn
```
### Importante modificar o arquivo `.env`!
- Renomear o arquivo `.env.example` para `.env` dentro de `/backend` e `/web`

- Para renderizar o mapa, crie uma conta grátis em [mapbox](https://www.mapbox.com/) e insira sua chave pública no arquivo `.env` de `/web`, conforme solicitado:
  - `REACT_APP_MAPBOX_TOKEN=INSIRA_SUA_CHAVE_DO_MAPBOX_AQUI`

- No arquivo `.env` de `/backend`, substituir conforme solicitado:
  - `HOST_URL=http://LOCALHOST:3333_OU_URLEXPO:3333`

  - Caso queira testar apenas a parte **web** da aplicação:
    - Substitua por `http://localhost:3333`

  - Caso queira testar apenas a parte **mobile**, ou a **mobile** em conjunto com a **web**:
    - Substitua pelo IP de conexão com [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) com :3333 no final (ex: `http://192.168.1.10:3333`);
    - Nesse caso, também é importante colocar esse mesmo IP de conexão na `baseURL` dentro do arquivo `mobile/src/services/api.ts`.

### Backend
```bash
# Executar para criar o banco de dados
$ yarn typeorm migration:run

# Rodar o backend
$ yarn dev
```
### Frontend
```bash
# Rodar aplicação web (cd web)
$ yarn start

# Rodar aplicação mobile (cd mobile)
$ yarn start
```

## Tecnologias
- [Node.js](https://nodejs.org/en/download/)
- [Express](https://www.npmjs.com/package/express)
- [ReactJS](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [TypeORM / SQLite](https://typeorm.io/#/)
- [Typescript](https://www.typescriptlang.org/)

## Créditos
Aplicação construída durante a Next Level Week 3, realizada por :rocket: [Rocketseat](https://rocketseat.com.br/).

## Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.