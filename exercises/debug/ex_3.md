# Exercise 3

* Create the following folder/file structure:
  ```
  /ex_3
    |-- index.js
    |-- package.json
  ```

## Todo
* Add the following files to the folder:
  * `index.js`
    ```js
    const oneLinerJoke = require('one-liner-joke')
    const express = require('express')
    const app = express()
    const port = process.env.PORT || 3000

    app.get('/', (req,res) => {
      const getRandomJoke = oneLinerJoke.getRandomJoke();
      const response = getRandomJoke.text.toUpperCase();
      res.json(response)
    })

    app.listen(port, () => console.log(`Open at http://localhost:${port}`))
    ```
  * `package.json`
    ```json
    {
      "name": "ex_3",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "express": "^4.17.1",
        "nodemon": "^2.0.2",
        "one-liner-joke": "^1.2.0"
      }
    }
    ```
* Run the application using `npm start`
* Resolve the following error in terminal
  ```sh
  TypeError: Cannot read property 'toUpperCase' of undefined
    at app.get (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/index.js:8:39)
    at Layer.handle [as handle_request] (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/layer.js:95:5)
    at /Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/index.js:275:10)
    at expressInit (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/middleware/init.js:40:5)
    at Layer.handle [as handle_request] (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/layer.js:95:5)
  ```

## index.js

* Once we start the project it will otuput the following message:
  ```sh
  Open at http://localhost:3000
  ```
* The page should load with the joke in uppercase from one line jokes
