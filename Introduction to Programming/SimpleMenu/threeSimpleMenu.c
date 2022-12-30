#include <stdio.h>
#include <stdbool.h>

int main() {

char agree;
bool flag = false;
    do {
    char choice;
    printf("\n\t\t\t\tWelcome to our menu\n\n");
    printf("A: Good morning\n");
    printf("B: Good afternoon\n");
    printf("C: Exit\n");

    printf("\nChoose what you want: ");
    _flushall();
    scanf("%c", &choice);
    
    switch (choice) {
        case 'a':
        case 'A':
            printf("Good morning\n");
            break;
        case 'B':
        case 'b':
            printf("Good afternoon\n");
            break;
        case 'C':
        case 'c':
            printf("\nThanks for using our menu!\n\n");
            break;
        default:
            printf("\nPlease choose a,b, or c!\n\n");
    }

    printf("Do you want to continue (y/n)? :");
    _flushall();
    scanf("%c", &agree);
    if (agree == 'y' || agree == 'Y')
        flag = true;
    else
        flag = false;

    } while (flag);
}