#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Employee
{
    int id ;
    char name[10];
    int age ;
    int salary;
    int commission ;
    int deduction ;

};

void printEmployee (struct Employee E)
{
    printf("id : %d \n",E.id) ;
    printf("Name :%s \n",E.name);
    printf("Age: %d \n",E.age);
    printf("Salary: %d \n",E.salary);
    printf("Commission: %d \n",E.commission);
    printf("deduction: %d \n",E.deduction);
}

void netSalary (struct Employee E)
{
    int net ;
    net = E.salary + E.commission - E.deduction ;
    printf("net Salary = %d",net);
}

int main()
{
    struct Employee e1 ;

    printf("Please Enter ur id \n");
    scanf("%d",&e1.id);

    printf("Please Enter ur name \n");
    scanf("%s",e1.name);

    printf("Please Enter ur age \n");
    scanf("%d",&e1.age);

    printf("Please Enter ur salary \n");
    scanf("%d",&e1.salary);

    printf("Please Enter ur comission \n");
    scanf("%d",&e1.commission);

    printf("Please Enter ur deduction \n");
    scanf("%d",&e1.deduction);

    system("cls");

    printEmployee(e1);
    netSalary(e1);


    return 0;
}
