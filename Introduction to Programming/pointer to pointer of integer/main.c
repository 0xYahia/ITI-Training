#include <stdio.h>
#include <stdlib.h>

int main()
{
    int x=10;
    int*ptr=&x;
    int**ptrToptr=&ptr;

    printf("Enter value of x by pointerTopinter\n");
    scanf("%d",ptr);
    printf("The value of x by pointerTopinter is %d",**ptrToptr);
    return 0;
}
