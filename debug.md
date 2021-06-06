# Debugging & Troubleshooting

[<- Go Back](deploy.md)

- Copy and paste the error into Google.

## Build Errors

- Ensure that you have the correct dependencies in your `package.json` and run a `npm install`

#### Exercises

- [Exercise 1](./exercises/debug/ex_1.md)
- [Exercise 2](./exercises/debug/ex_2.md)

## Debugging

### Express Application

- Use VS Code's Debug tools
- Select the node file you want to run. ie. `index.js`
- Add a configuration for the application, by clicking in **create a launch-json file** link
- It should autofill with the details of the project and look like the following:
  ```json
  {
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Express App",
        "skipFiles": ["<node_internals>/**"],
        "program": "${workspaceFolder}/index.js"
      }
    ]
  }
  ```
- Hit the play debug button to run the application
- Place breakpoint in the application to stop the application to view the line.

#### Exercises

- [Exercise 3](./exercises/debug/ex_3.md)

### Using Breakpoints In Chrome DevTools

- Click the Sources tab.
- Open the file containing the line of code you want to break on.
- Go the line of code.
- To the left of the line of code is the line number column. Click on it. A blue icon appears on top of the line number column.

#### Exercises

- [Exercise 4](./exercises/debug/ex_4.md)
- [Exercise 5](./exercises/debug/ex_5.md)

## Resources

- [Node.js debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- [How To Pause Your Code With Breakpoints In Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints)

## Let's Checkout Deploying

- [<- Deploying a Node.js Application](deploy.md) - [Production Best Practices ->](practices.md)
