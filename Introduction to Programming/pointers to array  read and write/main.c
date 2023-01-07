#include <stdio.h>
#include <stdlib.h>

int main()
{
    /*// Answar 1
    int arr[10]={0};
    int *ptr =arr;

    for (int i =0; i < 10; i++, ptr++){
        printf("Enter Elelment At index %d\n",i);
        scanf("%d",ptr);
    }
    ptr=arr;
    for(int i=0;i<10;i++,ptr++)
    {
        printf("value at index %d is %d\n",i,*ptr);
    }
*/
    // Answar 2
    int arr[10]={0};
    int *ptr =arr;

    for(int i=0;i<10;i++)
    {
        printf("Enter Elelment At index %d\n",i);
        scanf("%d",&ptr[i]);//0x10
    }
    for(int i=0;i<10;i++)
    {
        printf("value at index %d is %d\n",i,ptr[i]);
    }

  // Answar 3
    int arr[10]={0};
    int *ptr =arr;
    int i;
    for (i =0; i < 10; i++){
        printf("Enter Elelment At index %d\n",i);
        scanf("%d",(ptr+i));
    }

    for(i=0;i<10;i++)
    {
        printf("value at index %d is %d\n",i,*(ptr+i));
    }

    return 0;
}
