let basket = [];
function addToBasket() {
  let kitkat = parseFloat(
    document.getElementById("chocolates-types-kitkat").value
  );

  let lindt = parseFloat(
    document.getElementById("chocolates-types-lindt").value
  );

  let cadbury = parseFloat(
    document.getElementById("chocolates-types-cadbury").value
  );
  let ferrero_Rocher = parseFloat(
    document.getElementById("chocolates-types-ferrero_Rocher").value
  );

  if (kitkat < 9 && lindt < 9 && cadbury < 9 && ferrero_Rocher < 9) {
    let amount = 30 * cadbury + 25 * kitkat + 25 * ferrero_Rocher + 40 * lindt;
    let totalItem = kitkat + lindt + cadbury + ferrero_Rocher;
    document.getElementById("totalItem").innerHTML = totalItem;
    // let message = "Item added";
    // document.getElementById("message").innerHTML = message;
    alert("item added to cart");
    document.getElementById("totalAmount").innerHTML =
      "Total Amount Rs " + "" + amount;
  } else {
    let warning = "Maximum 8 items are allowed";
    document.getElementById("warning").innerHTML = warning;
  }
}

// // Function to display the custom pop-up
// function showPopup() {
//   document.getElementById("customAlert").style.display = "block";
// }

// // Function to close the custom pop-up
// function closePopup() {
//   document.getElementById("customAlert").style.display = "none";
// }
