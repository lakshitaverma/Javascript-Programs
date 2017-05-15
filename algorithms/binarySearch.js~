var a = [2,4,6,9,10],key=10; 

function binarySearch(a,key){
 var low = 0;
 var high = a.length; 
 while(low<=high){
  var mid = Math.floor((low+high)/2);
  if(key === a[mid]){
   return "Found key";
  } else if(key < a[mid]){
    high = mid-1;
  }else if(key > a[mid]) {
    low = mid+1;
  } 
 } 
 return "Not Found"; 
}

console.log(binarySearch(a,key)); // "Found key"
