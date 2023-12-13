# DevExtreme React Template Theme Selector and Authentication

## To add a theme

The [variables.css](react/src/themes/generated/variables.css) should be declared in [main.js](react/src/App.js) file. 
The following configuration row should be deleted: `"postinstall": "npm run build-themes"` from [package.json](react/package.json) 
Themes and icons should be added to [public](react/public) folder. Themes should be imported in [index.html](react/public/index.html) using the following syntax:
```
<link rel="stylesheet" href="%PUBLIC_URL%/dx.material.blue.light.css"/>
```

## Auth

In this repo, authentication is disabled. To add authentication functionality watch the December 13, 2023 live stream [here](https://www.youtube.com/watch?v=2epO6jGLTAE&ab_channel=DevExpress).

To log in, any combination of email and password will work.


# Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run electron`

Builds and electron app from the build folder. To run Electron, a build folder must exist. 

To create a build folder, run `npm run build`.

Note: Hot reloading functionality is not supported in this implementation of electron. Code modifications require a rebuild. 

