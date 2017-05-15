var a = [10,4,2,3,1,8]; 

function selectionSort(a){
 for(var i=0;i<a.length;i++){
   var min_ele = i;
   for(var j=i+1;j<a.length;j++){
     if(a[j] < a[min_ele]){
       min_ele = j;
     }
   }
   var temp = a[i];
   a[i] = a[min_ele];
   a[min_ele] = temp;
 }
  return a;
}

console.log(selectionSort(a)); // [1, 2, 3, 4, 8, 10]
