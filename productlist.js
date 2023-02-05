const fil = `https://kea-alt-del.dk/t7/api/products?limit=20`;

function fetchData() {
  fetch(fil)
    .then((respons) => respons.json())
    .then(showData);
}

const temp = document.querySelector("#smallproductTemplate").content;
const main = document.querySelector("main");

function showData(data) {
  data.forEach((object) => {
    const klon = temp.cloneNode(true);
    const produktid = object.id;
    const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${produktid}.webp`;

    klon.querySelector("img").src = object.imagePath;
    klon.querySelector("h3").textContent = object.productdisplayname;
    klon.querySelector(".price").textContent = object.price;
    main.appendChild(klon);
  });
}

fetchData();
