#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char ch ;

    printf("Please Enter the button \n");
    ch=getche();
    //printf("\n %d",ch);
    if (ch==-32)
    {
        ch=getch();
        printf("\n the button is Extended ASCII %d \n ",ch);
    }
    else
    {
        printf("\n the button is normal ASCII %d \n",ch);
    }
    return 0;
}
