# Exercise 7

1. Create a new folder with the name `ex_7`
1. Create the following structure and download the following [images](../../resources/images/html/dogs)
    ```
    /ex_7
    |-- imgs
    |  |- dogs
    |     |- thumbs
    |     |  |- dog_1.jpg
    |     |  |- dog_2.jpg
    |     |  |- dog_3.jpg
    |     |  |- dog_4.jpg
    |     |  |- dog_5.jpg
    |     |
    |     |- dog_1.jpg
    |     |- dog_2.jpg
    |     |- dog_3.jpg
    |     |- dog_4.jpg
    |     |- dog_5.jpg
    |
    |-- index.html
    |-- dog_1.html
    |-- dog_2.html
    |-- dog_3.html
    |-- dog_4.html
    |-- dog_5.html
    ```
1. You can download the images this way: ![How to download](../../resources/images/html/download_images.png)

## dog_1.html
1. Add a Document Title: Dog 1
1. Create a link to go to home 
1. Add a Main Title: So cute..
1. Add an Horizontal Rule
1. Show the big dog_1.jpg image

## dog_2.html
1. Add a Document Title: Dog 2
1. Create a link to go to home 
1. Add a Main Title: So cute..
1. Add an Horizontal Rule
1. Show the big dog_2.jpg image

## dog_3.html
1. Add a Document Title: Dog 3
1. Create a link to go to home 
1. Add a Main Title: So cute..
1. Add an Horizontal Rule
1. Show the big dog_3.jpg image

## dog_4.html
1. Add a Document Title: Dog 4
1. Create a link to go to home 
1. Add a Main Title: So cute..
1. Add an Horizontal Rule
1. Show the big dog_4.jpg image

## dog_5.html
1. Add a Document Title: Dog 5
1. Create a link to go to home 
1. Add a Main Title: So cute..
1. Add an Horizontal Rule
1. Show the big dog_5.jpg image

## index.html
1. Add a Document Title: I Love Dogs!
1. Add a Main Title: I Love Dogs!
1. Add an Horizontal Rule
1. Create a new section using a div with the id `thumbs`
1. Inside the thumbs section add the following elements: 
    * Add a Subtitle with the following text: Thumbs
    * Show the 5 thumbs images
1. Create a new section using a div with the id `nav`
    * Add a Subtitle with the following text: Links
    * Create an unordered list
      * Create a list item with a link inside to open the dog_*.html file (example: go to dog 1 points to dog_1.html)
1. Create a new section using a div with the id `gallery`
    * Add a Subtitle with the following text: Gallery
    * For each thumb image create a link element with the attribute target _blank and the src should point to the dogs big picture html document
      * Inside each link element add an image element to show the dog thumb picture
      * Example: We'll show the user a dog image and when the user clicks the image it will execute the link to the dogs html
1. Create a new section using a div with the id `figures`
    * Add a Subtitle with the following text: Figures & Captions
    * For each thumb picture create a figure element and add a figcaption with the description of the image (type of dog, color, etc)
1. All image elements must have an alt and title attributes