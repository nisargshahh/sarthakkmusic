function addItemToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('product-name')[0].innerHTML
    var price = findPrice()
    var imageSrc = shopItem.getElementsByClassName('product-image')[0].src
    function findPrice() {
      var str = shopItem.getElementsByClassName('price')[0].innerHTML;
      var matches = str.match(/(\d+)/);
      return matches[0];
    }  
    console.log(title,price,imageSrc)
    cartNumberIncreased();
  }
  
  
  function cartNumberIncreased(){
    var cartNumber;
    localStorage.setItem('cartNumber',100)
    var productNumbers =   localStorage.getItem('cartNumber')
    productNumbers = parseInt('productNumbers')
    console.log(productNumbers)
    
  
    
    function findNumber() {
      var cartNo = document.getElementsByClassName("cart-number")[0].innerHTML;
      var matches = cartNo.match(/(\d+)/);
      return matches[0];
    }
    cartNumber++;
    document.getElementsByClassName("cart-number")[0].innerHTML = cartNumber;
  
  }