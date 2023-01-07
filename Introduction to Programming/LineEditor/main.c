#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <windows.h>

#define Null -32
#define RIGHT 77
#define LEFT 75
#define Home 71
#define End 79
#define Esc 27
#define Enter 13

void gotoxy( int column, int line )
{
    COORD coord;
    coord.X = column;
    coord.Y = line;
    SetConsoleCursorPosition(GetStdHandle( STD_OUTPUT_HANDLE ),coord);
}


int main()
{
    char ch;
    char arr[30] = {};
    char *pfirst;
    char *pcurrent;
    char *plast;
    int first;
    int current;
    int last;
    int i;
    int flag = 0;

    current = last = first = 10;
    pcurrent = pfirst = plast = arr;

    do {
        gotoxy(current,10);
        ch = getch();
        switch(ch) {
            case Null:
                ch = getch();
                switch(ch) {
                    case RIGHT:
                        if(current < last) {
                            pcurrent++;
                            current++;
                            }
                        break;
                        case LEFT:
                                if(current < first) {
                                    pcurrent--;
                                    current--;
                                }
                        break;
                        case Home:
                                current = first;
                                pcurrent = pfirst;
                        break;
                        case End:
                                current = last;
                                pcurrent = plast;
                        break;
                    }
                break;
                case Enter:
                case Esc:

                    system("CLS");
                    flag = 1;
                     printf("%s",arr);
                    getch();

                break;
                default:

                    if(isprint(ch)) {
                        if(pcurrent < pfirst+29) {
                                if(pcurrent == plast) {
                                    *pcurrent = ch;
                                    printf("%c",ch);
                                    pcurrent++;
                                    current++;
                                    plast++;
                                    last++;
                                } else {
                                *pcurrent = ch;
                                printf("%c",ch);
                                pcurrent++;
                                current++;
                                }
                        }
                    }
                break;
            }
        }while(flag == 0);
    return 0;
}
