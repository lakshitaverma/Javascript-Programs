function SimpleAdding(num) { 

  if(num > 0) {
      num = num + SimpleAdding(num - 1);
  }
  return num; 
         
}
    
console.log(SimpleAdding(5)); // 5+4+3+2+1 = 15
