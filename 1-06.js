function position(str) {
  var one = str[0];
  var two = str[1];
  var thr = str[2];
  var fou = str[3];
  if (one >= "A" && one <= "Z") {
    return str[0] + " " + 1;
  } else if (two >= "A" && two <= "Z") {
    return str[1] + " " + 2;
  } else if (thr >= "A" && thr <= "Z") {
    return str[2] + " " + 3;
  } else if (fou >= "A" && fou <= "Z") {
    return str[3] + " " + 4;
  } else {
    return -1;
  }
}
console.log(position("abcd"));
console.log(position("AbcD"));
console.log(position("abCD"));
