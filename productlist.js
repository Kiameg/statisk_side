const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");
const fil = `https://kea-alt-del.dk/t7/api/products?limit=20&category=${cat}`;

document.querySelector("h1").textContent = cat;

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
    klon.querySelector(".type").textContent = object.articletype;
    klon.querySelector(".rabat").textContent = object.discount + "%";
    klon.querySelector("a").href = "product.html?id=" + object.id;

    if (object.soldout) {
      klon.querySelector("article").classList.add("soldOut");
    }

    if (object.discount) {
      klon.querySelector(".nowprice").textContent = "Now " + `${Math.round(object.price - (object.price * object.discount) / 100)} DKK`;
      klon.querySelector("article").classList.add("sale");
      klon.querySelector(".nowprice").classList.add("sale");
    }

    main.appendChild(klon);
  });
}

fetchData();
