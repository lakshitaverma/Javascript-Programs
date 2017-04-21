#include<stdio.h>
long long int a[10000000]={0}; 
long long int coins(long long int n){
 long long int n1,n2,n3,n4;
 if(n==0) return 0;
 if(n==1) return 1;
 if(n<1000000){
   if(a[n]!=0){
    return a[n];
   }
 }
 n1 = (n/2)+(n/3)+(n/4);
 if(n1>n){
   n2 = coins(n/2);
   n3 = coins(n/3);
   n4 = coins(n/4);
   n1 = n2+n3+n4;
   if(n1<10000000){
    a[n] = n1;
   }
    return n1;
 } else{
   return n;
 }
}
 
int main(){
 long long int n;
 while(scanf("%lld",&n)>0){
   printf("%lld\n",coins(n));
 }
 return 0;
}

/*
  Example
	Input:
	12
	2

	Output:
	13
	2
	You can change 12 into 6, 4 and 3, and then change these into $6+$4+$3 = $13. If you try changing the coin 2 into 3 smaller coins, 
        you will get 1, 0 and 0, and later you can get no more than $1 out of them. It is better just to change the 2 coin directly into $2.
*/ 
