function LongestWord(sen) { 
  sen = sen.replace(/[^\w\s]/gi, '');
  var arr = sen.split(" "),
  length=0,str;
  
  for(var i = 0; i < arr.length; i ++) {
     if(arr[i].length > length) {
       length = arr[i].length; 
       str = arr[i];
     }
  }
  return str;
         
}
 
console.log(LongestWord("Argument goes here!!!$%^")); // Argument special characters to ignore
