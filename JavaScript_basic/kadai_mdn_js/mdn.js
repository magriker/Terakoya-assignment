function checkDate() {
  const today = new Date();
  const day = String(today.getDate());
  const month = String(today.getMonth() + 1);
  const year = String(today.getFullYear());
  console.log(year + "年" + month + "月" + day + "日");
}

checkDate();
