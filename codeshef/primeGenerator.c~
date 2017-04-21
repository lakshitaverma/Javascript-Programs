#include<stdio.h>
#include<math.h>
 
int main(){
 int i,m,n,t;
 scanf("%d",&t);
 while(t--){
  scanf("%d %d",&m,&n);
  for(i=m;i<=n;i++){
     if(isPrime(i)){
 	printf("%d\n",i);
     }
  }
 }		
 return 0;
}
 
int isPrime(int n){
  int i;
  if(n==1) return 0;
  if(n ==2) return 1;
  if(n%2 ==0) return 0;
  else{
    for(i=3;i<=sqrt(n);i+=2){
        if(n%i == 0){
  	   return 0;
        }
    }
  }
  return 1;
} 

/*
 Example
	Input:
	2
	1 10
	3 5

	Output:
	2
	3
	5
	7

	3
	5
*/
