## nlw e-sports

<div align="center">
  <img src=".github/icon.png" alt="" width="18%">
</div>

<p align="center">
    <img alt="Platform" src="https://img.shields.io/static/v1?label=Platform&message=PC/Mobile&color=8257e6&labelColor=#">
    <a href="">
        <img src="https://img.shields.io/badge/Nlw-eSports-8257e6?&labelColor=#"></img>
    </a>
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/GabrielMedradoS/Nlw-eSports?color=8257e6&labelColor=#">
    <a href="">
        <img alt="License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=8257e6&labelColor=#">
    </a>
</p>

<p align="center">
    <a href="#projeto-">Projeto</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#tecnologias-">Tecnologias</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#layout-">Layout</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#licença-%EF%B8%8F">Licença</a>
</p>

### Layout 🚧

#### Desktop Screenshot:

<div align='center'>
<img src=".github/github image.png" alt="widget" width="40%">
<img src=".github/nlw eSports ads.png" alt="widget" width="45%">
</div>

#### Mobile Screenshot:

<div align='center'>
<b>🚧Under Construction 🚧 </b>
</div>

## Projeto 💻

- Conteúdo de aulas praticas da Rocketseat com o instrutor Diego Fernandes e Rodrigo Gonçalves
- Projeto consiste em criar um site para encontrar seu duo de jogos usando a api da twitch

## Rodar o projeto 🚴🏻‍♂️

#### On your machine:

##### Front-end

<details>
    <summary>Dependencies</summary>

```json
{
  "name": "web",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@radix-ui/react-checkbox": "^1.0.1",
    "@radix-ui/react-dialog": "^1.0.2",
    "@radix-ui/react-toggle-group": "^1.0.1",
    "axios": "^1.1.3",
    "phosphor-react": "^1.4.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.22",
    "@types/react-dom": "^18.0.7",
    "@vitejs/plugin-react": "^2.2.0",
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.18",
    "tailwindcss": "^3.2.1",
    "typescript": "^4.6.4",
    "vite": "^3.2.0"
  }
}
```

</details>

```bash
# Clone the repository
$ git clone https://github.com/GabrielMedradoS/Nlw-eSports.git

# Access the project folder at the command prompt
$ cd web

# Install the dependencies
$ npm install

# Run the script "start"
$ npm run dev

# The project will start at the door: 5173 - access http://localhost:5173
```

##### Mobile

<details>
    <summary>Dependencies</summary>

```json
{
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@expo-google-fonts/inter": "^0.2.2",
    "expo": "~46.0.16",
    "expo-font": "~10.2.0",
    "expo-linear-gradient": "~11.4.0",
    "expo-status-bar": "~1.4.0",
    "react": "18.0.0",
    "react-dom": "18.0.0",
    "react-native": "0.69.6",
    "react-native-safe-area-context": "4.3.1",
    "react-native-web": "~0.18.7"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9",
    "@types/react": "~18.0.0",
    "@types/react-native": "~0.69.1",
    "typescript": "~4.3.5"
  },
  "private": true
}
```

</details>

```bash
# Clone the repository
$ git clone https://github.com/GabrielMedradoS/Nlw-eSports.git

# Access the project folder at the command prompt
$ cd mobile

# Install the dependencies
$ npm install

# Run the script "start"
$ npm run start

# The project start and generate a Qr Code
```

##### Back-end

<details>
    <summary>Dependencies</summary>

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.js",
  "scripts": {
    "dev": "ts-node-dev --exit-child src/server.ts",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@prisma/client": "^4.5.0",
    "cors": "^2.8.5",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.14",
    "prisma": "^4.5.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.8.4"
  }
}
```

</details>

```bash
# Clone the repository
$ git clone https://github.com/GabrielMedradoS/Nlw-eSports.git

# Access the project folder at the command prompt
$ cd server

# Install the dependencies
$ npm install

# Run the script "start"
$ npm run dev

# The project will start at the door: 3333 - access http://localhost:3333
```

## Tecnologias 🛠

<div>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5"  height="30" width="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain-wordmark.svg" alt="css3"  height="30" width="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" height="30" width="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" height="30" width="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
  alt="typescript" height="30" width="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" height="30" width="40" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
</div>

#### documentation 📜

_`Aula 1 :`_

- [Vite | documentation](https://vitejs.dev/)
- [Expo](https://expo.dev/)

_`Aula 2 :`_

- [Tailwind](https://tailwindcss.com/docs/installation/using-postcss)
- [Tailwind backgroundImage](https://tailwindcss.com/docs/background-image)

##### Mobile

- [Expo fonts](https://docs.expo.dev/guides/using-custom-fonts/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

_`Aula 3 :`_

- [prisma](https://www.prisma.io/)
- [prisma Datasource Provider](https://www.prisma.io/docs/reference/api-reference/command-reference)
- [cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)

_`Aula 4 :`_

- [State Hook](https://reactjs.org/docs/hooks-state.html)
- [Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Radix](https://www.radix-ui.com/)
- [Radix Dialog](https://www.radix-ui.com/docs/primitives/overview/getting-started)

_`Aula 5 :`_

- [Radix Checkbox](https://www.radix-ui.com/docs/primitives/components/checkbox)
- [Radix Select](https://www.radix-ui.com/docs/primitives/components/select)
- [Radix Toggle Group](https://www.radix-ui.com/docs/primitives/components/toggle-group)
- [Axios](https://axios-http.com/ptbr/docs/intro)

_`Proximo Nível :`_

- [Validação](https://react-hook-form.com/get-started#SchemaValidation)
- [Radix select](https://www.radix-ui.com/docs/primitives/components/select)
- [Carrossel](https://keen-slider.io/)

## Licença ⚖️

This project is under the MIT license. See the archive [LICENSE](https://github.com/GabrielMedradoS/Nlw-eSports/blob/master/License) for more details.

## Autor ✍🏾

| <a href="https://github.com/gabrielmedrados/"><img src="https://user-images.githubusercontent.com/73303001/126536001-655e3cbd-facd-4de1-992f-b8d9d3656ace.jpg" width="100" alt="perfil"/><br>
| :-------------------------: |
| <a href="https://github.com/gabrielmedrados/"> Gabriel Medrado |</a> |

[![Linkedin Badge](https://img.shields.io/badge/-GabrielMedrado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-medrado-de-souza-9a30b3206/)
[![Gmail Badge](https://img.shields.io/badge/-gabriel.medradoo@hotmail.com-1769ff?style=flat-square&logo=Gmail&logoColor=white)](mailto:gabriel.medradoo@hotmail.com)
