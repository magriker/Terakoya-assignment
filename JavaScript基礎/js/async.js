console.log("処理1");
console.log("処理2");
console.log("処理3");

setTimeout(function () {
  console.log("処理4(非同期処理)");
}, 2000);

console.log("処理5");
console.log("処理6");
