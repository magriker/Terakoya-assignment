// 算術演算子を使った場合の戻り値を出力する
console.log(45 + 18);

// 比較演算子を使った場合の戻り値を出力する
console.log(45 > 18);

// 等価演算子を使った場合の戻り値を出力する
console.log("5" == 5);

// 厳密等価演算子を使った場合の戻り値を出力する
console.log("5" === 5);

let num = Math.floor(Math.random() * 5);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が4であれば、「大当たりです」という文字列を出力する
if (num === 4) {
  console.log("大当たりです");
} else if (num === 3) {
  console.log("当たりです");
} else {
  console.log("はずれです");
}

num = 20;

// &&（かつ）を記述して、すべての条件が成り立つ場合にのみ処理を行う（変数numの値が11～29）
if (num > 10 && num < 30) {
  console.log("変数numは10より大きく、30より小さいです");
} else {
  console.log("条件が成り立ちませんでした");
}

num = 30;

// ||（または）を記述して、1つでも条件が成り立てば処理を行う（変数numの値が10または30）
if (num === 10 || num === 30) {
  console.log("変数numは10または30です");
} else {
  console.log("条件が成り立ちませんでした");
}

//////////////////Switch/////////////////////////////////

// 変数numに0～4までのランダムな整数を代入する
num = Math.floor(Math.random() * 5);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値によって、出力する文字列を切り替える
switch (num) {
  case 2:
    console.log("小吉です");
    break;
  case 3:
    console.log("中吉です");
    break;
  case 4:
    console.log("大吉です");
    break;
  default:
    console.log("末吉です");
}
