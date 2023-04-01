#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char name[50];
    char store[50];
    int count =0 ;
    int i , j ;

    printf("Please Enter ur name \n");
    gets(name);

    printf("my name is %s \n",name);

    strcpy(store,"my name is ");
    strcat(store,name);

    while (store[count]!='\0')
    {
        count++ ;
    }

    for ( i=0, j=count-1 ; i<count/2 ; i++ , j--)
    {
        char temp = store[i];
        store[i]=store[j];
        store[j]= temp ;
    }

    puts(store);
    return 0;
}
