console.log(document);

var plus_btns = document.querySelectorAll(".plus");
var minus_btns = document.querySelectorAll(".minus");
var total = document.getElementById("total");
var prices = document.querySelectorAll(".price");
var like_btns = document.querySelectorAll(".like");
var delete_btns = document.querySelectorAll(".delete");

console.log(plus_btns);

function sum() {
  var somme = 0;
  for (let i = 0; i < prices.length; i++) {
    somme += Number(prices[i].innerHTML);
    total.innerHTML = somme;
  }
}

function inc(e) {
  var cible = e.target;
  console.log(cible);
  var div = cible.parentElement;
  console.log(div);
  var p = div.querySelector("p");
  var value = Number(p.innerHTML);
  value++;
  console.log(value);
  p.innerHTML = value;
  //  Multiplying value with price

  var td = div.parentElement;
  console.log(td);
  var tr = td.parentElement;
  console.log(tr);
  var unit_price = tr.querySelector(".unitPrice");
  var up = Number(unit_price.innerHTML);
  var price = tr.querySelector(".price");
  price.innerHTML = value * up;
  sum();
}

function dec(e) {
  var cible = e.target;
  console.log(cible);
  var div = cible.parentElement;
  console.log(div);
  var p = div.querySelector("p");
  var value = Number(p.innerHTML);
  if (value > 0) {
    value--;
  }
  p.innerHTML = value;

  //  Multiplying value with price

  var td = div.parentElement;
  console.log(td);
  var tr = td.parentElement;
  console.log(tr);
  var unit_price = tr.querySelector(".unitPrice");
  var up = Number(unit_price.innerHTML);
  var price = tr.querySelector(".price");
  price.innerHTML = value * up;
  sum();
}

function changeColor(e) {
  var cible = e.target;
  if (cible.style.color !== "red") {
    cible.style.color = "red";
  } else {
    cible.style.color = "gray";
  }
}

function deleteRow(e) {
  var cible = e.target;
  var tr = cible.parentElement.parentElement.parentElement.parentElement;
  console.log(tr);
  var price = tr.querySelector(".price");
  price.innerHTML = 0;
  // bech ki tefsakh line total yetbeddel
  tr.remove();
  // sum bech taawed tehseb total
  sum();
}

for (let i = 0; i < plus_btns.length; i++) {
  plus_btns[i].addEventListener("click", inc);
}

for (let i = 0; i < minus_btns.length; i++) {
  minus_btns[i].addEventListener("click", dec);
}

for (let i = 0; i < like_btns.length; i++) {
  like_btns[i].addEventListener("click", changeColor);
}

for (let i = 0; i < delete_btns.length; i++) {
  delete_btns[i].addEventListener("click", deleteRow);
}