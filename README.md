## Babbel Coding Challenge - React/Redux Calculator

### Functionality
- Basic arithmetic
- Floating point operations
- Negative numbers with toggle
- Percentage, natural log, exponentiation, square root
- Memory storage and recall

### To-do
Given more time, I'd implement isomorphic rendering. This would be done by creating separate client and server side scripts. The server side script would create a new redux store for every new request (handled by middleware like express). This store would then be passed to the client script, along with react rendered to html using ReactDOMServer.renderToString(). The client side would then create its redux store based on what it is passed, and then the app would function as normal.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
