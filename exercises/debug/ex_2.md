# Exercise 2

* Create the following folder/file structure:
  ```
  /ex_2
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
      res.json(getRandomJoke)
    })

    app.listen(port, () => console.log(`Open at http://localhost:${port}`))
    ```
  * `package.json`
    ```json
    {
      "name": "ex_2",
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
        "nodemon": "^2.0.2"
      }
    }
    ```
* Run the application using `npm start`
* Resolve the following error in terminal
  ```sh
  internal/modules/cjs/loader.js:583
      throw err;
      ^

  Error: Cannot find module 'one-liner-joke'
      at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
      at Function.Module._load (internal/modules/cjs/loader.js:507:25)
      at Module.require (internal/modules/cjs/loader.js:637:17)
      at require (internal/modules/cjs/helpers.js:22:18)
      at Object.<anonymous> (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_2/index.js:1:84)
      at Module._compile (internal/modules/cjs/loader.js:689:30)
      at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
      at Module.load (internal/modules/cjs/loader.js:599:32)
      at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
      at Function.Module._load (internal/modules/cjs/loader.js:530:3)
  [nodemon] app crashed - waiting for file changes before starting...
  ```

## index.js

* Once we start the project it will otuput the following message:
  ```sh
  Open at http://localhost:3000
  ```
* The page should load with the JSON Object from one line jokes
