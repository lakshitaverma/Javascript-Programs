#include <stdio.h>
 
int main() {
	int T,count1,count0,i;
	char str[100000];
	scanf("%d",&T);
	while(T--)
	{
	    count0=0;
	    count1=0;
	    scanf("%s",&str);
	    for(i=0;str[i]!='\0';i++)
	    {
	        if(str[i]=='1')
	        count0++;
	        if(str[i]=='0')
	        count1++;
	    }
	    if(count1==1||count0==1)
	    printf("Yes\n");
	    else
	    printf("No\n");
	}
	return 0;
}  

/*

Example
	Input:
	2
	101
	11
	Output:
	Yes
	No

*/
