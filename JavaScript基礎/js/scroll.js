const backBtn = document.getElementById("back-btn");

window.addEventListener("scroll", function () {
  const scrollValue = document.scrollingElement.scrollTop;
  if (scrollValue >= 300) {
    backBtn.style.display = "inline";
  } else {
    backBtn.style.display = "none";
  }
});
