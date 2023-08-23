document
  .getElementById("apply-confirm")
  .addEventListener("keyup", function(event) {
    const text = event.target.value;
    const couponButton = document.getElementById("btn-apply");
    if (text === "SELL200") {
      couponButton.removeAttribute("disabled");
    } else {
      couponButton.setAttribute("disabled", true);
    }
  });
