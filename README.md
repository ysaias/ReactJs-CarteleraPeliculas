# Interceptores con Axios para Manejo de JWT:

Se han configurado interceptores de Axios en el frontend para adjuntar automáticamente el JWT a todas las solicitudes HTTP salientes.
Estos interceptores toman el token JWT almacenado (por ejemplo, en localStorage o sessionStorage) y lo agregan al encabezado de autorización de cada petición, facilitando la autenticación del lado del cliente y la autorización en el backend.

# Gestión del Estado de Autenticación:

Se ha implementado una lógica para manejar el estado de autenticación del usuario, verificando si un JWT está presente y es válido.
En caso de que el JWT expire o sea inválido, se manejan los errores de autenticación y se redirige al usuario a la página de inicio de sesión.

# Autorización Basada en Claims en la Interfaz de Usuario:

Se ha implementado lógica de autorización en el frontend para mostrar u ocultar componentes de la interfaz de usuario en función de los claims del usuario.
Por ejemplo, ciertas secciones o botones de administración solo se muestran si el usuario tiene el claim "EsAdmin".

# Manejo de Errores de Autorización y Autenticación:

Se han configurado mecanismos para manejar errores de autorización (como respuestas 403) y errores de autenticación (como respuestas 401) en el frontend, proporcionando mensajes claros a los usuarios y gestionando redirecciones adecuadas.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
