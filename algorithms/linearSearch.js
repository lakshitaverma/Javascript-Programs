var a=[10, 5, 8, 2, 3],key=4; 

function linerSearch(a,key){
 for(var i=0; i<a.length;i++){  
  if(a[i] === key){
   return "Found key";
  }
 }
 return "Not Found";
}

console.log(linerSearch(a,key)); // "Not Found"
