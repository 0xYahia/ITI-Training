#include <stdio.h>
#include <stdlib.h>
#include <string.h>



struct Employee
{
    int id ;
    char name[20];
    int age ;
    int salary ;
    int commission ;
    int deduction ;

};


void netSalary (struct Employee E)
{
    int net ;
    net = E.salary + E.commission - E.deduction ;
    printf("net Salary = %d",net);
}

void printEmployee (struct Employee E)
{
    printf("id : %d \n",E.id) ;
    printf("Name :%s \n",E.name);
    printf("Age: %d \n",E.age);
    printf("Salary: %d \n",E.salary);
    printf("Commission: %d \n",E.commission);
    printf("deduction: %d \n",E.deduction);
}

int main()
{
    struct Employee e[3];

    for(int i =0 ; i<3 ; i++)
    {

    printf("Please Enter ur id \n");
    scanf("%d",&e[i].id);

    printf("Please Enter ur name \n");
    scanf("%s",e[i].name);

    printf("Please Enter ur age \n");
    scanf("%d",&e[i].age);

    printf("Please Enter ur salary \n");
    scanf("%d",&e[i].salary);

    printf("Please Enter ur comission \n");
    scanf("%d",&e[i].commission);

    printf("Please Enter ur deduction \n");
    scanf("%d",&e[i].deduction);

    system("cls");
    }

    for(int i=0 ; i<3 ; i++)
    {
        printEmployee(e[i]);
        netSalary(e[i]);
        printf("\n ----------------------------------- \n");
    }
    return 0;
}
