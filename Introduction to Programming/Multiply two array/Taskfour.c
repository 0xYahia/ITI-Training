#include <stdio.h>

#define R1 3
#define C1 3
#define R2 3
#define C2 2

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

    // Multiply two array
    int mulArray[R1][C2] = {0};
    for (int i = 0; i < R1; i++)
        for (int j = 0; j < C2; j++)
            for (int k = 0; k < R2; k++)
                mulArray[i][j] += firstArray[i][k] * secondArray[k][j];
    
    printf("Multiply of two array: \n");
    for (int i = 0;i < R1; i++)
        for (int j = 0; j < C2; j++)
            printf("Value at index [%d, %d] = %d\n", i, j,mulArray[i][j]);
}