const fil = `https://kea-alt-del.dk/t7/api/products`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640//.webp`;

function fetchData() {
  fetch(fil)
    .then((respons) => respons.json())
    .then(showData);
}

const temp = document.querySelector("#producttemplate").content;
const main = document.querySelector("main");

function showData(json) {
  json.forEach((products) => {
    const klon = temp.cloneNode(true);
    klon.querySelector("#pic").src = products.imagePath;
    klon.querySelector("#name").textContent = products.productdisplayname;
    klon.querySelector("#brand").textContent = products.brandname;
    klon.querySelector("#price").textContent = products.price;
    main.appendChild(klon);
  });
}

fetchData();
