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

    klon.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${object.id}.webp`;
    klon.querySelector("h3").textContent = object.productdisplayname;
    klon.querySelector(".price").textContent = object.price;

    if (object.soldout) {
      klon.querySelector("article").classList.add("soldOut");
    }

    if (object.discount) {
      klon.querySelector("article").classList.add("sale");
    }

    main.appendChild(klon);
  });
}

fetchData();
