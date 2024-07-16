const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  setTimeout(() => {
    document.getElementById("text").innerHTML = "ボタンをクリックしました";
  }, 2000);
});
