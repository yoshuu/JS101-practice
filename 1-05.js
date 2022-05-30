function isUpperCase(str) {
  var one = str[0];
  if (one >= "a" && one <= "z") return false;
  if (one >= "A" && one <= "Z") return true;
}
console.log(isUpperCase("abcd"));
