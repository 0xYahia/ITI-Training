#include <stdio.h>
#include <conio.h>

#define LENGTH 10

int min(int [], int size);
int max(int [], int size);
void sort(int [], int size);
int search(int [], int size, int number);

int main() {
    int numbers[LENGTH];

    printf("Enter numbers: ");
    for (int i = 0; i < LENGTH; i++)
            scanf("%d", &numbers[i]);
    
    printf("\nMin: %d", min(numbers, LENGTH));
    printf("\nMax: %d", max(numbers, LENGTH));
    
    sort(numbers, LENGTH);
    printf("\nSorted numbers: ");
    for (int i = 0; i < LENGTH; i++)
        printf("%d ", numbers[i]);
    
    _flushall();
    printf("\n\nEnter number to search: ");
    int number;
    scanf("%d", &number);
    int result = search(numbers, LENGTH, number);
    if (result == -1)
         printf("\nNumber %d Not Found", number);
    else 
        printf ("\nNumber %d at index %d",  number, result);

    printf("\n\nPlease enter any key to continue ..."), getch();
}

int min(int arr[], int size) {
    int min = arr[0];

    for (int i = 1; i < size; i++)
        if (arr[i] < min) min = arr[i];
    
    return min;
}
int max(int arr[], int size) {
    int max = arr[0];

    for (int i = 1; i < size; i++)
        if (arr[i] > max) max = arr[i];
    
    return max;
}
void sort(int arr[], int size) {
    for (int i = 1; i < size; i++) {
        for (int j = 0; j < size - 1; j++) {
            if (arr[i] < arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
int search(int arr[], int size, int number) {
    for (int i = 0; i < size; i++)
        if (arr[i] == number)
            return i;

    return -1;
}