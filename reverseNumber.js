function reverse(x) {
  var reverse = 0;
  while(x > 0){
    reverse = (reverse*10) + (x%10);
    x = Math.floor(x/10);
  }
  return reverse;
}

console.log(reverse(1234567)); // 7654321
