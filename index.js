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
   itemPrice: Math.floor(Math.random() * (101 - 1 + 1)) + 1
 };
 cart.push(tmp);
 return item + " has been added to your cart.";
}

function viewCart() {
  var i = 0;
  var tmp = "In your cart, you have ";
  
  if (cart.length === 0) return "Your shopping cart is empty.";
    else if (cart.length === 1) {
      tmp += cart[i].itemName + " at $" + cart[i].itemPrice + ".";
      return tmp;
    } else {
        while(i < cart.length) {
          if (i === cart.length - 1) tmp += " and " + cart[i].itemName + " at $" + cart[i].itemPrice + ".";
          else  tmp += cart[i].itemName + " at $" + cart[i].itemPrice + ", ";
          i++;
        }
        return tmp; 
    }
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
