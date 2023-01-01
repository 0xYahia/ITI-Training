#include <stdio.h>

#define R1 3
#define C1 2
#define R2 2
#define C2 1

int main() {
    int firstArray[R1][C1];
    int secondArray[R2][C2];
    
    printf("Get first Array: \n");
    for (int i = 0;i < R1; i++) {
        for (int j = 0;j < C1; j++) {
            printf("Enter value at index [%d, %d]: ", i, j);
            scanf("%d",&firstArray[i][j]);
        }
    }

    printf("Get second Array: \n");
    for (int i = 0;i < R2; i++) {
        for (int j = 0;j < C2; j++) {
            printf("Enter value at index [%d, %d]: ", i, j);
            scanf("%d",&secondArray[i][j]);
        }
    }

    int mulArray[R1][C2];
    for (int i = 0; i < C2; i++) 
        for (int j = 0; j < R1; j++) 
            mulArray[j][i] = (firstArray[j][i] * secondArray[i][i]) + (firstArray[j][i + 1] * secondArray[i + 1][i]);
        
    
    for (int i = 0; i < R1; i++)
        for (int j = 0; j < C2; j++)
            printf("Value at index [%d, %d] = %d\n", i, j, mulArray[i][j]);
}