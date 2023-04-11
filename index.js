const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    const dogImageContainer = document.getElementById("dog-image-container");
    data.message.forEach(imageUrl => {
      const img = document.createElement("img");
      img.src = imageUrl;
      dogImageContainer.appendChild(img);
    });
  });
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const breedList = document.getElementById("dog-breeds");
      const breeds = Object.keys(data.message);
      breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        breedList.appendChild(li);
      });
    });
    const breedList = document.getElementById("dog-breeds");
    breedList.addEventListener("click", event => {
      if (event.target.tagName === "LI") {
        event.target.style.color = "blue";
      }
    });
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    const breedList = document.getElementById("dog-breeds");
    const breeds = Object.keys(data.message);
    breeds.forEach(breed => {
      const li = document.createElement("li");
      li.innerText = breed;
      breedList.appendChild(li);
    });

    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", event => {
      const selectedLetter = event.target.value;
      const filteredBreeds = breeds.filter(breed => breed.startsWith(selectedLetter));
      breedList.innerHTML = "";
      filteredBreeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        breedList.appendChild(li);
      });
    });
  });
