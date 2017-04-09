function AlphabetSoup(str) { 

  str = str.split("");
  str.sort();
  str = str.join().replace(/,/g, "");
  return str; 
         
}
 
console.log(AlphabetSoup("codebyter")); // bcdeeorty
