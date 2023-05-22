var homeButton = document.getElementById("home");
if (homeButton) {
  homeButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "/";
  });
}

var aboutButton = document.getElementById("about");
if (aboutButton) {
  aboutButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "About.html";
  });
}

var guideButton = document.getElementById("guide");
if (guideButton) {
  guideButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "Guide.html";
  });
}

var brandButton = document.getElementById("brand");
if (brandButton) {
  brandButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "/";
  });
}

var joinButton = document.getElementById("button");
if (joinButton) {
  joinButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "Form.html";
  });
}
