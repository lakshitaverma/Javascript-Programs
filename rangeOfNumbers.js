//Write a JavaScript program to get the integers in range (x, y). 
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]
function range(x,y){
  var numbers = [];
  for(var i=x+1; i<y; i++){
    numbers.push(i);
  } 
  return numbers;
} 

console.log(range(2,9)); // [3, 4, 5, 6, 7, 8]
