#include <stdio.h>
#include <stdlib.h>

struct Employee
{
    int id;
    char name[10];
    int age;
    int salary;
};

int main()
{
    struct Employee e1;
    struct Employee* ptr;
    ptr=&e1;

    printf("Enter id\n");
    _flushall();
    scanf("%d", &ptr->id);
    _flushall();
    printf("Enter name\n");
    gets(&ptr->name);
    printf("Enter  age\n");
    scanf("%d", &ptr->age);
    printf("Enter Salary\n");
    scanf("%d", &ptr->salary);

    printf("Id is %d\n",ptr->id);
    printf("Name is ");
    puts(ptr->name);
    printf("Age is %d\n",ptr->age);
    printf("Salary is %d\n",ptr->salary);

    return 0;
}
