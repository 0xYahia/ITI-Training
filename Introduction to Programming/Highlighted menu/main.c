#include <stdio.h>
#include <stdlib.h>
#include <Windows.h>
#include <conio.h>
#define null -32

void gotoxy( int column, int line )
  {
  COORD coord;
  coord.X = column;
  coord.Y = line;
  SetConsoleCursorPosition(
    GetStdHandle( STD_OUTPUT_HANDLE ),
    coord
    );
  }

void textattr(int i)
{
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);

}
int main()
{
    char menu[3][5]={"New","Save","Exit"};
    int i,current=0,exitFlag=0;
    char ch;
  do
  {
      system("CLS");
      for(i=0;i<3;i++)
      {
         if (i==current)
        {
        textattr(0X50); //highlight current choice
       gotoxy(10,10+i*3);
       _cprintf("%s",menu[i]);
         }
        else
        {textattr(0X05);
        gotoxy(10,10+i*3);
       _cprintf("%s",menu[i]);
        }
      }


        ch=getch();
        switch(ch) //check inputs from keyboard
        {
        case -32: //extended key
            ch=getch();
                switch(ch) //define up and down arrows
                { case 0x48: //up arrow
                    --current;
                    if (current<0)
                        current=2; //reset
                    break;
                case 0x50: //down arrow
                    ++current;
                    if (current<0)
                        current=0;
                        break;
                }
                 break;
        case 0Xd: // case enter is pressed
            switch(current)
            {
            case 0:
                system("CLS");
                printf("New File");
                getch();
                break;
            case 1:
                system("CLS");
                printf("Saved");
                getch();
                break;
            case 2:
                exitFlag=1;
                break;
              }
              break;
            case 0X1B:
                exitFlag=1;
                break;
                }
        }

  while (exitFlag==0);



    return 0;
}
