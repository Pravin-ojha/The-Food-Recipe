$("#searchInput").focus(function () {
  
    $("#searchInput").css({
      "display": "inline",
      "width": "40%",
      "border": "1px solid #40585d",
      "opacity": "1",
      "padding": "8px 20px 8px 20px",
      "background-image": "none",
      "box-shadow": "0 0 1px black"
    });
    $("#submitsearch").css("display", "inline");
   
    $("#searchInput").prop("placeholder", "");
  });



//   const biryaniBox = document.getElementById("biryaniBox");
//   const popup1 = document.getElementById("popupBir");
//   const overlay1 = document.getElementById("overlayBir");
//   const closeBtn1 = document.getElementById("closeBtnBir");
  
//   // When the user clicks the div, show the popup
//   biryaniBox.addEventListener("click", function() {
//       popup1.style.display = "block"; // Show the popup
//       overlay1.style.display = "block"; // Show the overlay background
//   });
  
//   // When the user clicks the close button, hide the popup
//   closeBtn.addEventListener("click", function() {
//       popup1.style.display = "none"; // Hide the popup
//       overlay1.style.display = "none"; // Hide the overlay background
//   });
  
//   // Optional: Close the popup if the overlay is clicked
//   overlay.addEventListener("click", function() {
//       popup1.style.display = "none"; // Hide the popup
//       overlay1.style.display = "none"; // Hide the overlay background
//   }); 