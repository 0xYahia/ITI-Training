#include <stdio.h>
#include <stdlib.h>

int main(){
    printf("\t\tHello SD & UI\n");

    printf("Enter Number to Convert to Hex and Oct: ");
    int number;

    scanf("%d", &number);
    fflush(stdin);

    printf("The Hex is %x\n", number);
    printf("The Oct is %o\n\n", number);

    printf("Enter Character to Convert to ASCCI: ");
    char value;
    scanf("%c", &value);

    printf("The Char Representation %d\n", value);

    return 0;
}
