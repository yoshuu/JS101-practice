// 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。

// sum([1, 2, 3]) 預期回傳值：6

// sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0

function sum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

console.log(sum([-1, 1, 2, -2, 3, -3]));
