function largest(a,b,c){
 var largest;
 if(a < b && b < c){
    largest = b;
   } else{
     if(a < c){
     	largest = a;
     } else{
        largest = c;
     }
  }
  return largest
}

console.log(largest(8,1,5)); // 5
