function findAllSmall(arr, n) {
  var counter = 0;
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < n) counter++;
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < n) newarr.push(arr[i]);
  }
  return newarr;
}
console.log(findAllSmall([1, 2, 3], 10));
