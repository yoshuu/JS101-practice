var a = "";
function star(n) {
  for (var i = 1; i <= n; i++) {
    a += "*";
  }
  return a;
}

console.log(star(5));
