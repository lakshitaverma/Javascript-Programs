function CheckNums(num1,num2) { 
  
  if(num2 > num1) {
      return 'true';
  } else if( num1 === num2) {
      return '-1';
  } else {
      return 'false';
  }
         
}

console.log(CheckNums("8","8"));// -1
