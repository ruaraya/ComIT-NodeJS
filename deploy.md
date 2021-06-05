# Deploying a Node.js Application

[<- Go Back](mongodb.md)

## Deploying to Heroku

* To deploy your Node.js app you can use [Heroku](https://heroku.com) as hosting
* From the site: `Heroku is a fully managed container-based cloud platform, with integrated data services and a powerful ecosystem, for deploying and running modern apps`
* Let's get started with installing the Heroku Command Line Interface (CLI)
  * Windows
    * [Download the installer](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
  * MacOS
    ```bash
    brew install heroku/brew/heroku
    ```
  * Ubuntu 16+
    ```bash
    sudo snap install heroku --classic
    ```
* Use the `heroku login` command to log in to the Heroku CLI:
  ```bash
  heroku login
  heroku: Press any key to open up the browser to login or q to exit
  ›   Warning: If browser does not open, visit
  ›   https://cli-auth.heroku.com/auth/browser/***
  heroku: Waiting for login...
  Logging in... done
  Logged in as me@example.com
  ```
* Let's create a new node package
  ```bash
  cd node-example
  npm init
  ```
* Next install express
  ```bash
  npm install express --save
  ```
* For Heroku, it is important to specify the version of node to match your version `node --version`, edit the `package.json` to set the engine version.
  ```json
  {
    "name": "node-example",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "express": "^4.17.1"
    },
    "engines": {
      "node": "10.x"
    }
  }
  ```
* Specify the start script in `package.json`
  ```json
  {
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node index.js"
    }
  }
  ```
* Next lets update the `index.js` to include a basic express app. Note that we are passing the [environment variable](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env) PORT to our app.
  ```js
  const express = require('express')
  const port = process.env.PORT
  const app = express()

  app.get('/', (request, response) => {
    response.send('Hello Heroku World!')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  ```
* Build and run your application locally
  ```bash
  npm install
  heroku local
  ```
* After you commit your changes to git, you can deploy your app to Heroku.
  ```bash
  git init
  git add .
  git commit -m "Added a Procfile."
  heroku login
  Enter your Heroku credentials.
  ...
  heroku create
  Creating arcane-lowlands-8408... done, stack is cedar
  http://arcane-lowlands-8408.herokuapp.com/ | git@heroku.com:arcane-lowlands-8408.git
  Git remote heroku added
  git push heroku master
  ...
  -----> Node.js app detected
  ...
  -----> Launching... done
        http://arcane-lowlands-8408.herokuapp.com deployed to Heroku

  ```
* To open the app in your browser, type `heroku open`.

## Setting up the MongoDB database

* For our course and development, we will leverage [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free cloud-hosted sandbox database. This database tier is not considered suitable for production websites because it has no redundancy, but it is great for development and prototyping.
* You will first need to [create an account](https://www.mongodb.com/cloud/atlas/register) with MongoDB Atlas (this is free, and just requires that you enter basic contact details and acknowledge their terms of service)
* After logging in, you'll be taken to the [home](https://cloud.mongodb.com/v2) screen:


* Click **Build a Cluster** button in the Clusters Overview section.
  ![Create a cluster on MongoDB Atlas.](resources/images/deploy/MongoDB_Atlas_-_CreateCluster.jpg)
* This will open the *Create New Cluster* screen.
  ![Choose a cloud provider when using MongoDB Atlas.](resources/images/deploy/MongoDB_Atlas_-_ChooseProviderRegion.jpg)
  * Select any provider from the *Cloud Provider & Region* section. Different providers offer different regions.
  * Select any region marked "FREE TIER AVAILABLE".
  * Click the **Create Cluster** button (creation of the cluster will take some minutes).
* You will return to the *Cluster Overview* screen.
  ![Setup a collection on MongoDB Atlas.](resources/images/deploy/MongoDB_Atlas_-_CreateCollection.jpg)
  * Click the **Collections** button.
* This will open the *Collections* section.
  ![Create a database on MongoDB Atlas.](resources/images/deploy/MongoDB_Atlas_-_CreateDatabase.jpg)
  * Click the **Create Database** button.
* This will open the *Create Database* screen.
  ![Details during database creation on MongoDB Atlas.](resources/images/deploy/MongoDB_Atlas_-_DatabaseDetails.jpg)
  * Enter the name for the new database as `public`.
  * Enter the name of the collection as `Collection0`.
  * Click the **Create** button to create the database.
* You will return to the *Collection* screen with your database created.
  ![Database creation confirmation on MongoDB Atlas.](resources/images/deploy/MongoDB_Atlas_-_DatabaseCreated.jpg)
  * Click the *Overview* tab to return the cluster overview.
* From the Cluster0 Overview screen click the **Connect** button.
  ![Configure a connection when after setting up a cluster in MongoDB Atlas.](resources/images/deploy/MongoDB_Atlas_-_Connectbutton.jpg)
* This will open the Connect to Cluster screen.
  ![Setup a connection when using MongoDB Atlas.](resources/images/deploy/MongoDB_Atlas_-_ConnectCluster.jpg)
  * Click the **Add a Different IP Address** button, enter `0.0.0.0/0` for the IP Address and click **Add IP Address** button.
    * Note: It is a best practice to limit the IP addresses that can connect to your database and other resources. Here we allow a connection from anywhere because we don't know where the request will come from after deployment.
  * Enter a username and password and click **Create MongoDB User** button.
    * Note: Avoid using special characters in your MongoDB user password as mongoose may not parse the connection string properly.
  * If you have completed the 2 previous steps, the button **Choose a connection method** will turn green.
  * Click the **Choose a connection method** button.
* This will access the *Choose a connection method* tab.
  ![Choose a connection type when connecting with MongoDB Atlas.](resources/images/deploy/MongoDB_Atlas_-_ChooseAConnectionMethod.jpg)
  * Click the **Connect Your Application** option.
* This will open the Connect screen.
  ![Choose the Short SRV connection when settinup a connection on MongoDB Atalas.](resources/images/deploy/MongoDB_Atlas_-_ConnectForShortSRV.jpg)
  * Click the **Short SRV connection string** option to copy the connection string.
* This will open the connection string URL.
  ![Copy the Short SRV connection string when setting up a connection on MongoDB Atlas](resources/images/deploy/MongoDB_Atlas_-_CopyShortSRV.jpg)
  * Choose **Copy** button to copy the string.
  * Save this string somewhere safe.
  * Update the password with your users password.
  * Replace test with `public`.
* You have now created the database, and have an URL (with username and password) that can be used to access it. This will look something like: `mongodb+srv://your_user_name:your_password@cluster0-mbdj7.mongodb.net/public?retryWrites=true`
  * **DO NOT COMMIT THE VALUE TO GIT**. Since this contains a secret (the user and password in the connection string), it is best practice to leverage enviroment variables.

## Resources
* [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
* [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
* [MDN Using a Database (with Mongoose)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)
* [MDN Deploying to production](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)

## Let's Checkout Deploying
* [<- MongoDB & Mongoose](mongodb.md) - [Debugging & Troubleshooting ->](debug.md)
