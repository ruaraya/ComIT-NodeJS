# Exercise 6

* Create the following folder/file structure:
  ```
  /ex_6
    |-- index.html
  ```

  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

      <title>Responsive Grid Systems with Bootstrap</title>
    </head>
    <body>
      <h1>Hello, world!</h1>

      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
  </html>
  ```

## index.html
1. Create a basic HTML document with the Bootstrap Starter Template
1. Create a navbar with a dark color scheme and primary background color
1. Create a navbar brand link with the following image:
    
    ![Computer](./images/technical-support.png)
    
    [./images/technical-support.png](./images/technical-support.png)
1. Create a responsive/collapsable navbar with toggler  
1. Create a navbar navigation that has the following navigation items (on the left)
    * A link to `#` that is the active link with the content "Home"
    * A link to `#about-me` that is the active link with the content "About Me"
    * A dropdown link with content "Services" with the sub-items
        * A link to `#services` that is the active link with the content "All Services"
        * A link to `#web` that is the active link with the content "Web Services"
        * A link to `#mobile` that is the active link with the content "Mobile Services"
1. Create a form inside the navbar with an input and button with the text "Search"