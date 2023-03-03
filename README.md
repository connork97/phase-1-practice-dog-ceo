# Fetch Dog CEO

## Learning Goals

- Practice accessing information from APIs and using it to update the DOM
- Practice listening for user events and updating the DOM in response

## Introduction

In this lab, you will write JavaScript to get images of dogs and a list of dog
breeds from API's and render them to the DOM. You will also add some click
behavior to the list elements and implement a filter.

Note that this lab **does not contain tests**. You will be working from the
requirements described below and verifying that your code is working correctly
in the browser.

Once you're done, be sure to commit and push your code up to GitHub, then submit
the assignment using CodeGrade. Even though this practice lab does not have
tests, it must still be submitted through CodeGrade in order to be marked as
complete in Canvas.

## Challenge 1

This repository includes an `index.html` file that loads an `index.js` file.

```js
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
```

Add JavaScript that:

- on page load, fetches the images using the url above ⬆️
- parses the response as `JSON`
- adds image elements to the DOM **for each** 🤔 image in the array

---

## Challenge 2

```js
const breedUrl = "https://dog.ceo/api/breeds/list/all";
```

After the first challenge is completed, add JavaScript that:

- on page load, fetches all the dog breeds using the url above ⬆️
- adds the breeds to the page in the `<ul>` provided in `index.html`

---

## Challenge 3

Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
the user clicks on any one of the `<li>`s, the font color of that `<li>`
changes. This can be a color of your choosing.

---

## Challenge 4

Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
so that the user can filter breeds that start with a particular letter using a
[dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).

For example, if the user selects 'a' in the dropdown, only show the breeds with
names that start with the letter a. For simplicity, the dropdown only includes
the letters a-d. However, we can imagine expanding this to include the entire
alphabet.

---

![dog ceo](https://dog.ceo/img/dog.jpg)


//Storing for Later

//breedsArray = Object.keys(breedsObj);
//This returns what was a bunch of breeds (as objects) into breeds as Arrays

/*
let breedArr = [];

// API URL's

const IMG_URL = "https://dog.ceo/api/breeds/image/random/4";
const BREED_URL = "https://dog.ceo/api/breeds/list/all";

// Fetch and DOM Manipulation Functions

const fetchDogImg = () => {
    fetch(IMG_URL)
    .then(response => response.json())
    .then((dogImgObj) => {
        const dogMessageArr = dogImgObj.message;
        const imageContainer = document.getElementById('dog-image-container');
        dogMessageArr.forEach(dog => {
            const imgElement = document.createElement('img');
            imgElement.src = dog;
            imgElement.alt = "dog link";
            imageContainer.appendChild(imgElement);
        });
    })
    .catch(error => console.log(error));
}

const fetchDogBreed = () => {
    fetch(BREED_URL)
    .then(response => response.json())
    .then((dogBreedObj) => {
            const dogBreedArr = Object.keys(dogBreedObj.message);
            const breedList = document.getElementById('dog-breeds');
            dogBreedArr.forEach(dog => {
                const liElement = document.createElement('li');
                liElement.textContent = dog;
                breedArr.push(dog);
                breedList.appendChild(liElement);
                //  LI Color Change OnClick Event Listener
                liElement.addEventListener("click", function() {
                    liElement.style.color = "blue";
                })
            })
            dropdownFilter();
        //     const dropdown = document.getElementById("breed-dropdown")
        //     dropdown.addEventListener("change", function(event) {
        //         const selectedLetter = event.target.value;
        //         if (selectedLetter === "a") {
        //             console.log("you've selected a!");
        //         } else if (selectedLetter === "b") {
        //             console.log("you've selected b!");
        //         } else if (selectedLetter === "c") {
        //             console.log("you've selected c!");
        //         } else if (selectedLetter === "d") {
        //             console.log("you've selected d!");
        //         }
        // })
        })
        .catch(error => console.log(error));
}

const dropdownFilter = () => {
    const dropdown = document.getElementById("breed-dropdown")
    dropdown.addEventListener("change", function(event) {
        const selectedLetter = event.target.value;
        if (breedArr[].startsWith(selectedLetter) === false) {
            Element.remove();
        } else if (breedArr.startsWith(selectedLetter === true)) {
            console.log("good work!");
         } //else if (selectedLetter === "c") {
        //     console.log("you've selected c!");
        // } else if (selectedLetter === "d") {
        //     console.log("you've selected d!");
        // }
})
}
*/

// const filterDogBreeds = () => {
//     const dropDown = document.getElementById('breed-dropdown');
//     // const selectedOption = dropDown.value;
//     dropDown.addEventListener("onchange", function() {
//         if (dropDown.value == "a") {
//         console.log("ive been selected!");
//         } else {
//             console.log("nope, didn't work");
//         }
//     })
// }

// filterDogBreeds();

// document.addEventListener("onselect", function() {
//     const dropDown = document.getElementById('breed-dropdown');
//     const selectedLetter = dropDown.value;
//     if (selectedLetter = "a") {
//         console.log("a was selected");
//     }
// })



// On DOM Content Load Event Listeners

/*
document.addEventListener('DOMContentLoaded', function() {
    fetchDogImg();
    fetchDogBreed();
    // dropdownFilter();
});
*/