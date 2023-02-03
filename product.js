const id = 1532;
const url = `https://kea-alt-del.dk/t7/api/products//${id}`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640//${id}.webp`;

function fetchData() {
  fetch(url)
    .then((res) => res.json())
    .then(showProduct);
}

function showProduct(product) {
  console.log(product);
  document.querySelector("#model").textContent = product.productdisplayname;
  document.querySelector("img").src = imagePath;
  document.querySelector("#color").textContent = product.basecolour;
  document.querySelector("#id").textContent = product.id;
  document.querySelector("h3").textContent = product.productdisplayname;
  document.querySelector("#brand").textContent = product.brandname;
  document.querySelector("#type").textContent = product.articletype;
}

fetchData();
