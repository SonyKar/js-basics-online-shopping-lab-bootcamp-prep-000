var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var tmp = {
   itemName: item,
   itemPrice: Math.Floor(Math.Random() * (101 - 1 + 1)) + 1
 };
 cart.push(tmp);
 return item + " has been added to your cart.";
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
