#include<stdio.h>
 
int main(){
 
 int T,n,first, last, sum;
 scanf("%d",&T);
 while(T--){
   sum = 0; 
   scanf("%d",&n);
   last = n%10;
   while(n > 0){
    first = n%10;
    n = n/10;
   }
   sum = first + last;
   printf("%d\n",sum);
 }
 
return 0; 
}  
