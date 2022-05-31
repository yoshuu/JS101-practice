// stars(1) 預期輸出：
// *

// stars(3) 預期輸出：
// *
// **
// ***

// stars(7) 預期輸出：
// *
// **
// ***
// ****
// *****
// ******
// *******

// 請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案。

// function stars(n) {
//   answer = "";
//   for (var i = 0; i < n; i++) {
//     var counter = n;
//     if (counter > 0) {
//       counter--;
//       answer = answer + "*";
//     }
//   }
//   return answer;
// }
// console.log(stars(5));

// 假如我今天想要做一個可以印出最多五個的星星
function stars(n) {
  var stars = "";
  for (var i = 0; i < n; i++) {
    stars = stars + "*";
    console.log(stars);
  }
}
stars(5);

// 其實我覺得，這樣應該也算成功  吧？
