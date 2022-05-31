function findSmallCount(arr, n) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < n) counter++;
  }
  return counter;
}
console.log(findSmallCount([1, 2, 3], 2));
