# Exercise 5

* Create the following folder/file structure:
  ```
  /ex_5
    |-- index.html
    |-- scripts.js
  ```

## Todo
* Add the following files to the folder:
  * `index.html`
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Hello World</title>
      <script src="./scripts.js"></script>
    </head>
    <body>
      <h1 id="heading"></h1>
    </body>
    </html>
    ```
  * `scripts.js`
    ```js
    window.onload = () => {
      let page = {title: 'Hello world'}
      let heading = document.querySelector('.heading')
      heading.innerText = page.title;
    }
    ```
* Run the application using `http-server` or just open the `index.html`

## Result

* Once we start the project it will output the following message on the page **Hello world**