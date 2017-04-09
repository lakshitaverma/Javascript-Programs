//Write a JavaScript program to compute the sum of an array of integers. Go to the editor
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21 

var array = [1, 2, 3, 4, 5, 6], 
    sum = 0;
for(var i = 0; i < array.length; i++){
  sum = sum + array[i];
}

console.log(sum);
