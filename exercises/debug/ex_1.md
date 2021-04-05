# Exercise 1

* Create the following folder/file structure:
  ```
  /ex_1
    |-- index.js
    |-- package.json
  ```

## Todo
* Add the following files to the folder:
  * `index.js`
    ```js
    const express = require('express')
    const app = express()
    const port = process.env.PORT || 3000

    app.get('/', (req,res) => {
      res.send('Hello world')
    })

    app.listen(port, () => console.log(`Open at http://localhost:${port}`))
    ```
  * `package.json`
    ```json
    {
      "name": "ex_1",
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
        "express": "^4.17.1"
      }
    }
    ```
* Run the application using `npm start`
* Resolve the following error in terminal
  ```sh
  sh: nodemon: command not found
  npm ERR! file sh
  npm ERR! code ELIFECYCLE
  npm ERR! errno ENOENT
  npm ERR! syscall spawn
  npm ERR! ex_1@1.0.0 start: `nodemon`
  npm ERR! spawn ENOENT
  npm ERR! 
  npm ERR! Failed at the ex_1@1.0.0 start script.
  npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
  npm WARN Local package.json exists, but node_modules missing, did you mean to install?

  npm ERR! A complete log of this run can be found in:
  npm ERR!     /Users/davidcrossman/.npm/_logs/2019-12-11T21_39_35_518Z-debug.log
  ```

## index.js

* Once we start the project it will otuput the following message:
  ```sh
  Open at http://localhost:3000
  ```
* The page should load with the message "Hello world"