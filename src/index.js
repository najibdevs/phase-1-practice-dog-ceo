console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById('dog-image-container');
    const dogBreedsList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                dogImageContainer.appendChild(img);
            });
        });

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                dogBreedsList.appendChild(li);
            });
        });

    dogBreedsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; 
        }
    });

    breedDropdown.addEventListener('change', function (event) {
        const selectedLetter = event.target.value;
        const allBreeds = Array.from(dogBreedsList.children);
        allBreeds.forEach(breed => {
            if (breed.textContent.startsWith(selectedLetter)) {
                breed.style.display = 'block';
            } else {
                breed.style.display = 'none';
            }
        });
    });
});
