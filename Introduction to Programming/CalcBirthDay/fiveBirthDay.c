#include <stdio.h>
#include <stdbool.h>

int main()
{
    int year, month, day;

    int currentYear = 2022;
    int currentMonth = 10;
    int currentDay = 26;

    do {
        printf("please enter year: ");
        _flushall();
        scanf("%i", &year);
    } while (year > 2022 || year < 1980);

    do {
        printf("please enter month: ");
        _flushall();
        scanf("%i", &month);
    } while (month < 1 || month > 12);

    bool isLeap = (year % 4 == 0);
    bool isThirty = (month == 4 || month == 6 || month == 9 || month == 11);
    bool isThirtyOne = !isThirty;
    
    bool flag = false;
    
    do {
        printf("please enter day: ");
        _flushall();
        scanf("%i", &day);
      
        if (day < 0 || day > 31)
            flag = true;
        else if (day > 29 && month == 2)
            flag = true;
        else if (day == 29 && month == 2 && !isLeap)
            flag = true;
        else if (day > 30) {
            if (isThirty)
                flag = true;
            else if (isThirtyOne)
                flag = false;
        }
    } while (flag); 

    if (day > currentDay) {
        if (isThirty) {
            currentDay += 30;
            month--;
        }
        else if (isThirtyOne) {
            currentDay += 31;
            month--;
        }
        else if(isLeap)
            currentDay += 29;
        else
            currentDay += 28;
    }

    if (month > currentMonth) {
        year--;
        currentMonth += 12;
    }

    int yearResult = currentYear - year;    
    int monthResult = currentMonth - month;
    int dayResult = currentDay - day;

    printf("You are %d years old, %d months and %d days", yearResult,monthResult, dayResult);
}