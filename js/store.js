function addItemToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("product-name")[0].innerHTML;
  var price = findPrice();
  var imageSrc = shopItem.getElementsByClassName("product-image")[0].src;
  function findPrice() {
    var str = shopItem.getElementsByClassName("price")[0].innerHTML;
    var matches = str.match(/(\d+)/);
    return matches[0];
  }
  console.log(title, price, imageSrc);
  cartNumberIncreased();
}

let products = [
  {
    name: "Product 1",
    tag: "greyshirt",
    price: 699,
    incart: 0,
  },

  {
    name: "Product 2",
    tag: "greybruh",
    price: 799,
    incart: 0,
  },

  {
    name: "Product 3",
    tag: "greywhat",
    price: 1099,
    incart: 0,
  },
  {
    name: "Product 4",
    tag: "greydude",
    price: 699,
    incart: 0,
  },
];



function cartNumberIncreased() {
  var productNumbers = localStorage.getItem("cartNumber");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumber", productNumbers + 1);
    document.getElementsByClassName('cart-number')[0].innerHTML = productNumbers;
    document.getElementsByClassName('cart-number')[1].innerHTML = productNumbers;
  } else {
    localStorage.setItem("cartNumber", 1);
    document.getElementsByClassName('cart-number')[0].innerHTML = 1
    document.getElementsByClassName('cart-number')[1].innerHTML = 1
  }

}
function onLoadCartUpdate(){
  var productNumbers = localStorage.getItem("cartNumber");

  if (productNumbers) {
    document.getElementsByClassName('cart-number')[0].innerHTML = productNumbers;
    document.getElementsByClassName('cart-number')[1].innerHTML = productNumbers;
  }
}

onLoadCartUpdate();
