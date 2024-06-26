# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo app

Demo app - https://github.com/KiruthikaJeyashankar/DemoReactApp/tree/main?tab=readme-ov-file 

## HumorHub 

Suggest a joke - https://official-joke-api.appspot.com/random_joke 

App displays a "Tell joke" button, on clicking this button show a random joke (by making the network call to the website)

**Requirement:** 

We are having a "Tell Joke" button in the app, on click of the button 
- until the data is fetched show only the loader (Text - Loading...) and not the button
- Once data is fetched, show the data fetched & Load data button

**_data received from backend_**

```
{
    data: {
        "type":"general",
        "setup":"What did the traffic light say to the car as it passed?",
        "punchline":"Don't look I'm changing!",
        "id":187
    }
}
```

**_Data to be displayed in screen_**

```agsl
What did the traffic light say to the car as it passed?
Don't look I'm changing!
```

Note: We already have the code for loader shown on button click and "Tell Joke" button is hidden while loading. Start with adding code for making n/w call and showing the joke

## Testing resources

- https://testing-library.com/docs/queries/about/#types-of-querie- s
- https://jestjs.io/docs/mock-functions
- https://testing-library.com/docs/queries/about/#types-of-queries
- https://axios-http.com/docs/example
- https://www.w3.org/TR/html-aria/#docconformance
- https://jestjs.io/docs/snapshot-testing 
- https://testing-library.com/docs/queries/about/#types-of-queries

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

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
