var a = [10,4,2,3,1,8]; 

function bubbleSort(a){
 for(var i=0;i<a.length-1;i++){
   for(var j=0;j<a.length-i-1;j++){
     if(a[j] > a[j+1]){
       var temp = a[j];
       a[j]=a[j+1];
       a[j+1]= temp; 
     }
   }
 }
 return a;
}

console.log(bubbleSort(a));// [1, 2, 3, 4, 8, 10]
