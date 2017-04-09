//Vowel count
var str = "Hello word".split(""); 
var count = 0;
var vowels = 'aeiou'.split(""); 
for(var i=0; i<str.length; i++){
  if(vowels.indexOf(str[i]) > -1){
    count++ ;
  }
}

console.log(count);
