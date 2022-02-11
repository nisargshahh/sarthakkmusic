if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeItemBtn = document.getElementsByClassName("remove-item");
  for (var i = 0; i < removeItemBtn.length; i++) {
    var button = removeItemBtn[i];
    button.addEventListener("click", removeBtn);
  }
  var inputQuantity = document.getElementsByClassName('quantity')
  for (var i = 0; i < inputQuantity.length; i++) {
    var input = inputQuantity[i];
    input.addEventListener("change", quantityChanged);
  }
  var addToCart = document.getElementsByClassName('add-to-cart')
  for (var i = 0; i < addToCart.length; i++) {
    var addItem = addToCart[i];
    addItem.addEventListener("click", addItemToCartClicked);
  }

}

function removeBtn(event) {
  var removeitem = event.target;
  removeitem.parentElement.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value)||input.value<=0){
    input.value = 1;
    alert("Invalid Quantity")
    updateCartTotal();
  }
  else if(input.value>10){
    input.value = 10;
    alert("Max quantity allowed per item is 10")
    updateCartTotal();
  }
  else
  updateCartTotal();
}


function updateCartTotal() {
  var numberOfRows = CountRows();
  var total = 0;
  var cartRows = document.getElementById("table-id").getElementsByTagName("tr");
  // console.log(numberOfRows,cartRows) (for checking)
  for (var j = 1; j < cartRows.length; j++) {
    var cartRow = cartRows[j];
    var productPriceElement =
      cartRow.getElementsByClassName("product-price")[0];
    var quantityElement = cartRow.getElementsByClassName("quantity")[0];
    var rowTotalPriceElement =
      cartRow.getElementsByClassName("row-total-price")[0];
    var totalPriceRsElement =
      document.getElementsByClassName("total-price-rs")[0];
    var GSTElement = document.getElementsByClassName("GST")[0];
    var subTotalElement = document.getElementsByClassName("sub-total")[0];

    var productPrice = productPriceElement.innerHTML;
    var quantity = quantityElement.value;
    var rowTotal = (rowTotalPriceElement.innerHTML = productPrice * quantity);
    var total = (totalPriceRsElement.innerHTML = total + rowTotal);
    var GST = (GSTElement.innerHTML = (5 * total) / 100);
    var subTotal = (subTotalElement.innerHTML = total + GST);
  }
}

function CountRows() {
  var totalRowCount = 0;
  var rowCount = 0;
  var table = document.getElementById("table-id");
  var rows = table.getElementsByTagName("tr");
  //i = 1, because first row has table headers.
  for (var i = 1; i < rows.length; i++) {
    totalRowCount++;
    if (rows[i].getElementsByTagName("td").length > 0) {
      rowCount++;
    }
  }
  return totalRowCount;
}

// function cartTotal() {
//   var cartItems = document.getElementsByClassName("all-cart-items")[0];
//   var cartRows = cartItems.getElementsByClassName("table-row");
//   for (var i = 0; i < cartRows.length; i++) {
//     var cartRow = cartRows[i];
//     var productInfo = cartRow.getElementsByClassName("prod-desc")[0];
//     var otherData = cartRow.getElementsByClassName("other-data")[0];
//     var productPriceElement =
//       productInfo.getElementsByClassName("product-price");
//     var quantityElement = otherData.getElementsByClassName("quantity");
//     var rowTotalPriceElement =
//       otherData.getElementsByClassName("row-total-price");
//     var totalPriceRsElement = document.getElementsByClassName("total-price-rs");
//     var GSTElement = document.getElementsByClassName("GST");
//     var subTotalElement = document.getElementsByClassName("sub-total");
//     var productPrice = productPriceElement.innerHTML[0];
//     var rowTotalPrice = rowTotalPriceElement.innerHTML[0];
//     console.log(productPrice);
//   }
// }
