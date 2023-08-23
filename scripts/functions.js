// function for paragraph id
function getSelectedProduct(yourProduct) {
  // product name nilam
  const nameElement = document.getElementById(yourProduct);
  const productName = nameElement.innerText;

  // product tare cart e dhukailam
  const cart = document.getElementById("cart");
  const selectedProduct = document.createElement("p");
  selectedProduct.innerText = productName;
  cart.appendChild(selectedProduct);
}

// function for getting the product price

function getProductPrice(productPrice) {
  // product price nilam
  const priceElement = document.getElementById(productPrice);
  const priceElementText = priceElement.innerText;
  const priceElementNumber = parseFloat(priceElementText);

  // default price nilam
  const totalPriceElement = document.getElementById("total-price");
  const totalPriceText = totalPriceElement.innerText;
  const totalPriceNumber = parseFloat(totalPriceText);

  // update the current total price
  const notunPrice = parseFloat(priceElementNumber + totalPriceNumber);
  totalPriceElement.innerText = notunPrice;

  // Enabling purchase button
  const purchaseButton = document.getElementById("confirm-purchase");
  if (notunPrice > 0) {
    purchaseButton.removeAttribute("disabled");
  } else {
    purchaseButton.setAttribute("disabled", true);
  }

  // getting the current discount which is zero
  const totalDiscountElement = document.getElementById("discount-price");
  const totalDiscountText = totalDiscountElement.innerText;
  let totalDiscountNumber = parseFloat(totalDiscountText);

  // checking the validation of having a discount
  if (notunPrice > 200) {
    totalDiscountNumber = (notunPrice * 0.2).toFixed(2);
    totalDiscountElement.innerText = totalDiscountNumber;
  } else {
    totalDiscountNumber = 0;
  }

  // now post discount part starts ....
  const finalTotalElement = document.getElementById("total-after-discount");
  const finalTotalText = finalTotalElement.innerText;
  let finalTotalNumber = parseFloat(finalTotalText);
  const newFinalTotalNumber = notunPrice - totalDiscountNumber;
  finalTotalElement.innerText = newFinalTotalNumber;
}
