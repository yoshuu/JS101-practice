function star(n) {
  var a = "";
  for (var i = 1; i < n; i++) {
    a += "*";
  }
  return a;
}

console.log(star(10));

// a= a + *   a += *
// 我的問題：var宣告變數的方式
