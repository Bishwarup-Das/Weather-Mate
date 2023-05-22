var brandButton = document.getElementById("brand");
if (brandButton) {
  brandButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "/";
  });
}