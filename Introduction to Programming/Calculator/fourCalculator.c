#include <stdio.h>
#include <stdbool.h>

int main() {
    int firstNumber, secondNumber, result;
    char operator, agree;
    bool flag = false;
    
    do {
    printf("please enter first number: " );
    _flushall();
    scanf("%i", &firstNumber);

    printf("please enter second number: " );
    _flushall();
    scanf("%i", &secondNumber);

    printf("please enter Operator: " );
    _flushall();
    scanf("%c", &operator);

    result = 0;
    switch (operator)
    {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        result = firstNumber / secondNumber;
    default:
        break;
    }
    
    printf("Result = %d\n\n", result);
    
    printf("Do you want to continue (y/n)? :");
    _flushall();
    scanf("%c", &agree);
    if (agree == 'y' || agree == 'Y')
        flag = true;
    else
        flag = false;

    } while (flag);

}