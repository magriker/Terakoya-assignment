const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
const urlPost = "https://jsonplaceholder.typicode.com/posts";
const button = document.getElementById("ajax-btn");

button.addEventListener("click", function () {
  const dummyData = { name: "侍太郎", age: 30 };
  fetch(urlPost, {
    method: "POST",
    headers: { "Consten-Tyoe": "application/json" },
    body: JSON.stringify(dummyData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("サーバーからの応答：\n " + JSON.stringify(data, null, 2));
      //   const weather = data[0].timeSeries[0].areas[0].weathers[1];
      //     const element = document.createElement("p");
      //     element.textContent = `東京の天気 + ${weather} `;
      //     document.body.appendChild(element);
      //   console.log("東京の天気" + weather);
    });
});
