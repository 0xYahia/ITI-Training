#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char fname[10] ;
    char lname[10];
    char fulln[21];

    printf("Please Enter ur first name \n");
    gets(fname);
    printf("Please Enter ur last name \n");
    gets(lname);

    strcpy(fulln,fname);
    strcat(fulln," ");
    strcat(fulln,lname);

    printf("your full name is \t");
    puts(fulln);
    return 0;
}
