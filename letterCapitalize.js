function LetterCapitalize(str) { 
  
  str = str.split(" ");
  for (var i = 0; i < str.length; i ++) {
      var str_i =  str[i];
      str[i] = str_i.charAt(0).toUpperCase() + str[i].slice(1,str[i].length);
  }
  return str.join().replace(/,/g," "); 
         
}

console.log(LetterCapitalize("Argument goes here")); // Argument Goes Here
