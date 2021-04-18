# Bootstrap

- Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.
- Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.

## Get Started

- Looking to quickly add Bootstrap to your project? Use [BootstrapCDN](https://getbootstrap.com/docs/4.3/getting-started/introduction/). Using a package manager or need to download the source files? [Head to the downloads page](https://getbootstrap.com/docs/4.3/getting-started/download/).

### CSS

- Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.
  ```html
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
  />
  ```

### JS

- Many of the components require the use of JavaScript to function. Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. Place the following `<script>`s near the end of your pages, right before the closing `</body>` tag, to enable them. jQuery must come first, then Popper.js, and then the JavaScript plugins.

  ```html
  <script
    src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"
  ></script>
  ```

### Starter template

- Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <!-- Bootstrap CSS -->
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />

      <title>Hello, world!</title>
    </head>
    <body>
      <h1>Hello, world!</h1>

      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  ```

#### Practice

[Exercise 1](exercises/bootstrap/ex_1.md)

## Layout

### Grid system

[Please review the Bootstrap Documentation](https://getbootstrap.com/docs/4.3/layout/grid/)

#### Practice

[Exercise 2](exercises/bootstrap/ex_2.md)

[Exercise 3](exercises/bootstrap/ex_3.md)

## Content

### Images

[Please review the Bootstrap Documentation](https://getbootstrap.com/docs/4.3/content/images/)

#### Practice

[Exercise 4](exercises/bootstrap/ex_4.md)

## Components

### Buttons

[Please review the Bootstrap Documentation](https://getbootstrap.com/docs/4.3/components/buttons/)

### Forms

[Please review the Bootstrap Documentation](https://getbootstrap.com/docs/4.3/components/forms/)

#### Practice

[Exercise 5](exercises/bootstrap/ex_5.md)

### Navbar

[Please review the Bootstrap Documentation](https://getbootstrap.com/docs/4.3/components/navbar/)

#### Practice

[Exercise 6](exercises/bootstrap/ex_6.md)

## Utilities

### Colors

[Please review the Bootstrap Documentation](https://getbootstrap.com/docs/4.3/utilities/colors/)
