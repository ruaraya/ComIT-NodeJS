# Production Best Practices

[<- Go Back](debug.md)

## Performance and Reliability

* Use gzip compression
* Use the [compression](https://www.npmjs.com/package/compression) middleware for gzip compression in your Express app. For example:
  ```js
  var compression = require('compression')
  var express = require('express')
  var app = express()
  app.use(compression())
  ```
* Don’t use synchronous functions
* Handle exceptions properly
* To ensure you handle all exceptions, use the following techniques:
  * [Use try-catch](https://expressjs.com/en/advanced/best-practice-performance.html#use-try-catch)
    ```js
    app.get('/search', function (req, res) {
      // Simulating async operation
      setImmediate(function () {
        var jsonStr = req.query.params
        try {
          var jsonObj = JSON.parse(jsonStr)
          res.send('Success')
        } catch (e) {
          res.status(400).send('Invalid JSON string')
        }
      })
    })
    ```
  * [Use promises](https://expressjs.com/en/advanced/best-practice-performance.html#use-promises)
  ```js
  app.get('/', function (req, res, next) {
    // do some sync stuff
    queryDb()
      .then(function (data) {
        // handle data
        return makeCsv(data)
      })
      .then(function (csv) {
        // handle csv
      })
      .catch(next)
  })

  app.use(function (err, req, res, next) {
    // handle error
  })
  ```
* Setting NODE_ENV to “production” makes Express:
  * Cache view templates.
  * Cache CSS files generated from CSS extensions.
  * Generate less verbose error messages.
* Ensure your app automatically restarts
* Run your app in a cluster
* Cache request results
* Use a load balancer
* Use a reverse proxy

## Security


* Security best practices for Express applications in production include:
  * Don’t use deprecated or vulnerable versions of Express
  * Use TLS
  * Use Helmet
  * Use cookies securely
  * Prevent brute-force attacks against authorization
  * Ensure your dependencies are secure
  * Avoid other known vulnerabilities
  * Additional considerations

### Website security threats

* **Cross-Site Scripting (XSS)** is a class of attacks that allow an attacker to inject client-side scripts through the website into the browsers of other users
* **SQL injection** enables malicious users to execute arbitrary SQL code on a database, allowing data to be accessed, modified, or deleted irrespective of the user's permissions
* **Cross-Site Request Forgery (CSRF)** attacks allow a malicious user to execute actions using the credentials of another user without that user’s knowledge or consent
* [Denial of Service (DoS)](https://developer.mozilla.org/en-US/docs/Glossary/Distributed_Denial_of_Service) is usually achieved by flooding a target site with fake requests so that access to a site is disrupted for legitimate users.


## Resources
* [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) (Express docs)
* [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html) (Express docs)
* [Website Security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security) (Mozilla docs)
* [OWASP Top 10 2017](https://www.cloudflare.com/learning/security/threats/owasp-top-10/) (Cloudflare docs)

## Let's Checkout Debugging
* [<- Debugging & Troubleshooting](debug.md)
