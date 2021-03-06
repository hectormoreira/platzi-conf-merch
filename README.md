# platzi-conf-merch

Proyecto del [Curso Profesional de React Hooks de Platzi](https://platzi.com/clases/react-hooks/)

[Proyecto desplegado en Firebase](https://platzi-merch-313714.web.app/)

## Dependencias

```sh
mkdir platzi-conf-merch
cd platzi-conf-merch

npm i react react-dom
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install html-webpack-plugin html-loader --save-dev

npm install babel-loader  @babel/preset-env @babel/preset-react @babel/core --save-dev

npm install css-loader mini-css-extract-plugin --save-dev

npm install -g eslint

npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

npm install prettier eslint-plugin-prettier eslint-config-prettier

npm install react-router-dom --save

npm install axios --save

```

- `npm install react-paypal-button --save` Botón de Paypal Package
- `npm install @react-google-maps/api --save` Google Maps Package
- `npm install dotenv-webpack -D` Para trabajar con variables de entorno
- `npm install axios --save` axios para peticiones http
- `npm install -g firebase-tools` firebase tools
- `firebase login:ci` generar token de firebase
- `npm install react-helmet --save` manejo de meta etiquetas para SEO
- `npx create-strapi-app platziconf-backend --quickstart` crear nuevo proyecto de Strapi

## Deploy en Firebase
Seguir la documentación en [GitHub Action for Firebase](https://github.com/marketplace/actions/github-action-for-firebase)

## Git Hooks con Husky

Husky es una herramienta que nos permite ejecutar Git Hooks de forma más amigable y sencilla con los cuales vamos a garantizar que se corren las pruebas pertinentes en nuestro código y de esta forma no enviar un bug o inconsistencias al repositorio del proyecto.

```sh
npm install husky --save-dev
```

**Agregar Husky a nuestro proyecto:**  `package.json.`

```json
 "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  }
```

## Recursos
- [¿Es buena idea usar Paypal como procesador de pagos en mi producto digital?](https://platzi.com/blog/es-buena-idea-usar-paypal-como-procesador-de-pagos-en-mi-producto-digital/)
- [Crear api key de google maps](https://console.cloud.google.com/)
- [Position Stack](https://positionstack.com/)
- [github-action-for-firebase](https://github.com/marketplace/actions/github-action-for-firebase)
- [Strapi](https://strapi.io/)