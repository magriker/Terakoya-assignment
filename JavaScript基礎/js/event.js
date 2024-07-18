const btn = document.getElementById("output-btn");
const listBtn = document.getElementById("add-btn");
const parentList = document.getElementById("parent-list");
const countBtn = document.getElementById("count-btn");
const areaBtn = document.getElementById("area-btn");
const osBtn = document.getElementById("os-btn");

btn.addEventListener("click", function () {
  console.log("クリックされました！");
});

listBtn.addEventListener("click", function () {
  const childList = document.createElement("li");
  childList.textContent = "これはリスト要素です。";
  parentList.appendChild(childList);
});

countBtn.addEventListener("click", function () {
  const text = document.forms.textForm.textBox.value;
  console.log(text.length + "文字");
});

areaBtn.addEventListener("click", function () {
  const area = document.forms.areaForm.area.value;
  console.log(area);
});

osBtn.addEventListener("click", function () {
  const os = document.forms.osForm.os;
  console.log(os);

  for (i = 0; i < os.length; i++) {
    if (os[i].checked) {
      console.log(os[i].value);
    }
  }
});
