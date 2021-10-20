// window.addEventListener("load", Categories);
const endpoint = "http://digitaljungle.dk/two/bicycle/wp-json/wp/v2/";
getCategories();

function getCategories() {
    fetch(endpoint + "categories?parent=5")
        .then(res => res.json())
        .then(putCategories);
    getBikes();
}

function putCategories(catArray) {
    const template = document.querySelector("template#categories").content;
    const parentEl = document.querySelector(".top_title");

    catArray.forEach(cat => {
        const copy = template.cloneNode(true);
        copy.querySelector(".cats").textContent = cat.name
        parentEl.appendChild(copy);
    })
    getBikes();
}

function getBikes() {
    fetch("http://digitaljungle.dk/two/bicycle/wp-json/wp/v2/bicycle?per_page=10&embed")
        .then(res => res.json())
        .then(putBikes);
}

function putBikes(bikesArray) {
    console.log(bikesArray);
    const templateB = document.querySelector("template#bike_card").content;
    const parentElB = document.querySelector(".bikes");

    bikesArray.forEach(bike => {
        const copy = templateB.cloneNode(true);
        copy.querySelector(".title").textContent = bike.title.rendered
        // copy.querySelector("article img")
        // copy.querySelector("article h2")
        // copy.querySelector(".price span")
        // copy.querySelector(".colours span")
        // copy.querySelector(".stock span")
        parentElB.appendChild(copy);
    })

}