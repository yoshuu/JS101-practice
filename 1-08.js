function findSmallerTotal(arr, n) {
  var counter = 0;
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < n) counter++;
  }
  for (var i = 0; i < counter; i++) {
    total = total + arr[i];
  }
  return total;
}
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0));
