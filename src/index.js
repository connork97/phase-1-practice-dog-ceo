// API URLs
const IMG_URL = "https://dog.ceo/api/breeds/image/random/4";
const BREED_URL = "https://dog.ceo/api/breeds/list/all";

// Containers
const dogImageContainer = document.getElementById('dog-image-container');
const dogBreedsUl = document.getElementById('dog-breeds');

const fetchDogImage = () => {
    fetch(IMG_URL)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        const dogImageData = data.message;
        // console.log(dogImageData);
        dogImageData.forEach((item) => {
            const dogImage = document.createElement('img');
            dogImage.src = item;
            dogImage.style.height = '150px';
            dogImage.style.width = 'auto';
            dogImageContainer.appendChild(dogImage);
        })
    })
    .catch((error) => console.error(error))
}

const fetchDogBreed = () => {
    fetch(BREED_URL)
    .then((response) => response.json())
    .then((data) => {
        const breedObj = data.message;
        const breedArray = Object.keys(breedObj);
        breeds = breedArray;
        // console.log(data)
        // console.log(breedArray)
        breedArray.forEach((breed) => {
            createBreedList(breed);
        })
    })
    .catch((error) => console.error(error))
}

const changeBreedColor = (event) => {
    // dogLi.addEventListener('click', (event) => {
    const currentColor = event.target.style.color;    
    if(currentColor === "black"){
        event.target.style.color = "magenta";
    } else {
        event.target.style.color = "black";
    }
    // })
}


const breedDropdown = document.getElementById('breed-dropdown');
let breeds = [];

const filterBreeds = (firstLetter, breedArray) => {
    return breedArray.filter((breed) => {
        return breed[0] === firstLetter;
    })
}

            
const createBreedList = (breedName) => {
    const dogLi = document.createElement('li');
    dogLi.textContent = breedName;
    dogLi.addEventListener('click', changeBreedColor);
    dogBreedsUl.append(dogLi);
}

breedDropdown.addEventListener('change', (event) => {
    console.log(event.target.value);
    const filteredBreeds = filterBreeds(event.target.value, breeds);
    dogBreedsUl.innerHTML = "";
    filteredBreeds.forEach((breed) => {
        createBreedList(breed);
    })
})


// document.addEventListener('DOMContentLoaded', () => {
    fetchDogImage();
    fetchDogBreed();
// })