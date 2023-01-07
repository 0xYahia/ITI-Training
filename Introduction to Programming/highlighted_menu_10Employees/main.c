#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <conio.h>
#include <string.h>

#define EXTENDED -32
#define Up 72
#define Down 80
#define Home 71
#define End 79
#define Enter 13
#define Esc 27
#define Tab 9
#define BACKSPACE 8
#define DELETE 127

#define Size 10


void gotoxy( int column, int line )
{
    COORD coord;
    coord.X = column;
    coord.Y = line;
    SetConsoleCursorPosition(GetStdHandle( STD_OUTPUT_HANDLE ),coord);
}

void textattr(int i)
{
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);

}

struct Employee{
    int id;
    char name[11];
    int age;
    int salary;
    int commission;
    int deducation;

};

struct Employee emp[2];

void normalizer(){
    for(int i = 0 ; i < Size ; i++){
         emp[i].id = -32;
         strcpy(emp[i].name , " ");
    }
}

void displayAllEmp( ){


    for(int i = 0 ; i < Size ; i++){
        if(emp[i].id != -32){
                printf("\nThe Employee at index %d \n" , i);
            printf("\n the id : %d \n" , emp[i].id);
            printf("\n the name is %s \n" , emp[i].name);
            printf("\n the age is %d \n" , emp[i].age);
            printf("\n the salary is %d \n" , emp[i].salary);
            printf("\n the commission is %d \n" , emp[i].commission);
            printf("\n the deduction is %d \n" , emp[i].deducation);
        }
    }
}

void displayByID(int ID ){
     for(int i = 0 ; i < Size ; i++){
        if(emp[i].id == ID){

                printf("\nThe Employee at index %d \n" , i);
            printf("\n the id : %d \n" , emp[i].id);
            printf("\n the name is %s \n" , emp[i].name);
            printf("\n the age is %d \n" , emp[i].age);
            printf("\n the salary is %d \n" , emp[i].salary);
            printf("\n the commission is %d \n" , emp[i].commission);
            printf("\n the deduction is %d \n" , emp[i].deducation);
        }
    }
}

void displayByName(char name[]){



    for(int i = 0 ; i < Size ; i++){


        if(strcmp(emp[i].name , name) == 0){
            printf("\n The Employee at index %d \n" , i);
            printf("\n the id : %d \n" , emp[i].id);
            printf("\n the name is %s \n" , emp[i].name);
            printf("\n the age is %d \n" , emp[i].age);
            printf("\n the salary is %d \n" , emp[i].salary);
            printf("\n the commission is %d \n" , emp[i].commission);
            printf("\n the deduction is %d \n" , emp[i].deducation);

        }
    }


}

void DeleteByID(int id){
    for(int i = 0 ; i < Size ; i++){
        if(emp[i].id == id){

            printf("\n\nDeleted Employee %s \n" , emp[i].name);
            emp[i].id = -32;
            strcpy(emp[i].name , " ");
        }
    }
}

void DeleteByName(char name[]){
 for(int i = 0 ; i < Size ; i++){
        if(strcmp(emp[i].name , name) == 0){

            printf("\n\n Deleted Employee %s \n" , emp[i].name);
            emp[i].id = -32;
            strcpy(emp[i].name , " ");
        }
    }
}



int main()
{

    normalizer(2);

    emp[0].id = 1;
    strcpy(emp[0].name , "mahmoud");
    emp[0].age = 20;
    emp[0].salary = 2000;
    emp[0].commission = 500;
    emp[0].deducation = 50;



    char menu[8][15]={"New","DisplayAll","DisplayByID","DisplayByName" , "DeleteALL" , "DeleteByID" , "DeleteByName" , "Exit"};
    int cursor = 0;
    char ch;
    int flag = 10;
    char new_ch;



    do{
            system("cls");
        for(int i = 0 ; i < 8 ; i ++){
            gotoxy(15,15+i*2);
            if(i == cursor){
                textattr(5);

            }else{
                textattr(7);
            }
             printf("%s" , menu[i]);

    }

    ch = getch();

    switch(ch)
        {
            case EXTENDED:
            ch=getch();
            switch(ch)
            {
                case Up:
                    cursor--;
                    if(cursor<0)
                    {
                        cursor=7;
                    }
                    break;
                case Down:
                    cursor++;
                    if(cursor>7)
                    {
                        cursor=0;
                    }
                    break;
                case Home:
                cursor=0;
                break;

                case End:
                cursor=3;
                break;
            }
            break;


            case Enter:
            switch(cursor)
            {
                case 0:
                    _flushall();


                    system("cls");
                  //  printf("New Page");

                    int index = 0;

                    printf("Enter the wanted index : ");
                    scanf("%d" , &index);


                    int first_col = 11;

                    int second_col = 30*2+2;

                    int new_cursor = -10;
                    int new_flag = 10;
                   // char name[10];


                    do{







                    gotoxy(first_col,15);

                    printf("Enter ID :");
                    if(new_cursor == 0){
                        gotoxy(first_col * 2 ,15);

                        scanf("%d" , &emp[index].id);
                        new_cursor++;

                    }




                    gotoxy(second_col,15);
                    printf("Enter Name : ");


                    if(new_cursor == 1){
                            gotoxy(second_col*2,15);
                            int counter = 0;


                            do{

                          new_ch = getche();
                          emp[index].name[counter] = new_ch;
                          counter++;

                        }while(new_ch != 13);



                            new_cursor++;

                    }




                    gotoxy(first_col,17);
                    printf("Enter Age :");
                     if(new_cursor == 2){
                        gotoxy(first_col * 2 , 17);
                          scanf("%d" , &emp[index].age);
                        new_cursor++;
                     }





                    gotoxy(second_col,17);
                    printf("Enter Salary :");
                    if(new_cursor == 3){
                         gotoxy(second_col * 2 , 17);

                          scanf("%d" , &emp[index].salary);

                        new_cursor++;
                    }




                    gotoxy(first_col,19);
                    printf("Enter Commisiion :");
                    if(new_cursor == 4){
                         gotoxy(first_col * 2 + 7 , 19);

                           scanf("%d" , &emp[index].commission);

                        new_cursor++;
                    }




                    gotoxy(second_col,19);
                    printf("Enter Deduction :");
                     if(new_cursor == 5){
                          gotoxy(second_col * 2 , 19);

                          scanf("%d" , &emp[index].deducation);
                        new_cursor++;
                    }

                    if(new_cursor > 5){new_cursor = 0;}

                    if(new_cursor == -10){new_cursor = 0;}
                    else{break;}




                    }while(new_flag == 10);



                    //wait for a while
                    getch();
                break;
                case 1:
                    system("cls");
                    _flushall();

                    displayAllEmp(2);
                    //wait for a while
                    getch();
                break;
                case 2:
                    system("cls");
                    _flushall();

                    int id;
                    printf("\n\n Please Enter ID : ");

                    scanf("%d" , &id);

                    displayByID(id);
                    //wait for a while
                    _flushall();
                    getch();
                break;
                case 3:

                    system("cls");


                    printf("\n\n Please Enter Name : ");

                    _flushall();
                     char name_deleted[11];
                        int counter = 0;


                             do{

                          new_ch = getche();
                          name_deleted[counter] = new_ch;
                          counter++;

                        }while(new_ch != 13);
                        name_deleted[counter] = '\0';
                        displayByName(name_deleted);

                    getch();
              //  flag=0;
                break;

                case 4:
                    normalizer();
                        _flushall();
                    system("cls");

                    printf("\n\n Done All Clear");
                    getch();
                    break;

                case 5:

                    system("cls");
                    printf("\n\n Please Enter ID : ");
                    _flushall();
                    scanf("%d" , &id);
                    DeleteByID(id);
                    getch();
                    break;
                case 6:

                     system("cls");
                        _flushall();
                     printf("Enter Name : ");


                         counter = 0;


                             do{

                          new_ch = getche();
                          name_deleted[counter] = new_ch;
                          counter++;

                        }while(new_ch != 13);


                        DeleteByName(name_deleted);
                        getch();
                        break;

                case 7:
                    system("cls");
                    return 0;
            }
            break;
            case Esc:
            flag=0;
            break;
            case Tab:
                cursor++;
                if(cursor>6)
                {
                    cursor=0;
                }
            break;
        }

    }while(flag == 10);


    printf("\n\n\n\n\n\n\n\n");
    return 0;
}
