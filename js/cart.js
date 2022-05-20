if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeItemBtn = document.getElementsByClassName("remove-item");
  for (let i = 0; i < removeItemBtn.length; i++) {
    let button = removeItemBtn[i];
    button.addEventListener("click", removeBtn);
  }
  let inputQuantity = document.getElementsByClassName("quantity");
  for (let i = 0; i < inputQuantity.length; i++) {
    let input = inputQuantity[i];
    input.addEventListener("change", quantityChanged);
  }
  let addToCart = document.getElementsByClassName("add-to-cart");
  for (let i = 0; i < addToCart.length; i++) {
    let addItem = addToCart[i];
    addItem.addEventListener("click", addItemToCartClicked);
  }
}

function removeBtn(event) {
  let removeitem = event.target;
  removeitem.parentElement.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
    alert("Invalid Quantity");
    updateCartTotal();
  } else if (input.value > 10) {
    input.value = 10;
    alert("Max quantity allowed per item is 10");
    updateCartTotal();
  } else updateCartTotal();
}

function updateCartTotal() {
  let numberOfRows = CountRows();
  let total = 0;
  let cartRows = document.getElementById("table-id").getElementsByTagName("tr");
  // console.log(numberOfRows,cartRows) (for checking)
  for (let j = 1; j < cartRows.length; j++) {
    let cartRow = cartRows[j];
    let productPriceElement =
      cartRow.getElementsByClassName("product-price")[0];
    let quantityElement = cartRow.getElementsByClassName("quantity")[0];
    let rowTotalPriceElement =
      cartRow.getElementsByClassName("row-total-price")[0];
    let totalPriceRsElement =
      document.getElementsByClassName("total-price-rs")[0];
    let GSTElement = document.getElementsByClassName("GST")[0];
    let subTotalElement = document.getElementsByClassName("sub-total")[0];

    let productPrice = productPriceElement.innerHTML;
    let quantity = quantityElement.value;
    let rowTotal = (rowTotalPriceElement.innerHTML = productPrice * quantity);
    let total = (totalPriceRsElement.innerHTML = total + rowTotal);
    let GST = (GSTElement.innerHTML = (5 * total) / 100);
    let subTotal = (subTotalElement.innerHTML = total + GST);
  }
}

function CountRows() {
  let totalRowCount = 0;
  let rowCount = 0;
  let table = document.getElementById("table-id");
  let rows = table.getElementsByTagName("tr");
  //i = 1, because first row has table headers.
  for (let i = 1; i < rows.length; i++) {
    totalRowCount++;
    if (rows[i].getElementsByTagName("td").length > 0) {
      rowCount++;
    }
  }
  return totalRowCount;
}

// function cartTotal() {
//   let cartItems = document.getElementsByClassName("all-cart-items")[0];
//   let cartRows = cartItems.getElementsByClassName("table-row");
//   for (let i = 0; i < cartRows.length; i++) {
//     let cartRow = cartRows[i];
//     let productInfo = cartRow.getElementsByClassName("prod-desc")[0];
//     let otherData = cartRow.getElementsByClassName("other-data")[0];
//     let productPriceElement =
//       productInfo.getElementsByClassName("product-price");
//     let quantityElement = otherData.getElementsByClassName("quantity");
//     let rowTotalPriceElement =
//       otherData.getElementsByClassName("row-total-price");
//     let totalPriceRsElement = document.getElementsByClassName("total-price-rs");
//     let GSTElement = document.getElementsByClassName("GST");
//     let subTotalElement = document.getElementsByClassName("sub-total");
//     let productPrice = productPriceElement.innerHTML[0];
//     let rowTotalPrice = rowTotalPriceElement.innerHTML[0];
//     console.log(productPrice);
//   }
// }
