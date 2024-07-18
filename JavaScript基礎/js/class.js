class Product {
  // コンストラクタを使ってインスタンス化するときに初期化する
  constructor(name, price, category) {
    // console.log('敏感肌にも優しい100%天然由来のシャンプーです。')
    // インスタンス（オブジェクト）にプロパティを持たせる
    // this.name = 'シャンプー';
    // this.price = 500;
    // this.category = '生活雑貨';
    this.name = name;
    this.price = price;
    this.contegory = category;
  }

  describe() {
    console.log("この商品は" + this.name + "です。");
  }
}

const shampoo = new Product("シャンプー", 500, "生活雑誌");
const coffee = new Product("コーヒー", 1500, "飲料");

console.log(shampoo);
console.log(coffee);

shampoo.describe();

const user = {
  name: "侍太郎",
  age: 36,
  gender: "男性",
  greet: () => {
    console.log("よろしくお願いします！");
  },
};

// メソッドを呼び出す（実行する）
user.greet();
