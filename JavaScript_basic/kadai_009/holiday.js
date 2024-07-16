holidays = [
  "正月",
  "成人の日",
  "建国記念日",
  "天皇誕生日",
  "春分の日",
  "昭和の日",
  "憲法記念日",
  "みどりの日",
  "こどもの日",
  "海の日",
  "山の日",
  "敬老の日",
  "秋分の日",
  "スポーツの日",
  "文化の日",
  "勤労感謝の日",
];

let length = holidays.length - 1;

for (let i = 0; i <= length; i++) {
  console.log(holidays[i]);
}

console.log("-----------------以下while文-------------------");

let i = 0;

while (i <= length) {
  console.log(holidays[i]);
  i++;
}
