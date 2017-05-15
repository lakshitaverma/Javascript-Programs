var a = [10,4,2,3,1,8]; 

function insertionSort(a){
 for(var i = 1; i < a.length;i++){
   var key = a[i];
   j =i-1;
   while(j >= 0 && a[j] > key){
    a[j+1] = a[j];
    j--;
   }
   a[j+1] = key;
 }
 return a;
}

console.log(insertionSort(a)); // [1, 2, 3, 4, 8, 10]
