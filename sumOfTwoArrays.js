var array1 = [1,0,2,3,4],
    array2 = [3,5,6,7,8,13],
   length1 = array1.length,
   length2 = array2.length,
   sum = [];
if(length1 > length2){
  for (var i = 0; i < array1.length;i++){
  if(!array2[i]){
    array2[i] = 0;
  }
    sum[i] = array1[i]+array2[i];
  }
} else {
  for (var i = 0; i < array2.length;i++){
  if(!array1[i]){
    array1[i] = 0;
  }  
  sum[i] = array1[i]+array2[i];
  }
}

console.log(sum);
