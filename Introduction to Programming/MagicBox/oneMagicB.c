#include <stdio.h>
#include <windows.h>

void gotoxy( int column, int line )
{
    COORD coord;
    coord.X = column;
    coord.Y = line;
    SetConsoleCursorPosition(GetStdHandle( STD_OUTPUT_HANDLE ),coord);
}

int main() {
    int row, col;
    int size = 3;
    row = 1;
    col = size / 2 + 1;

    for (int i = 1; i <= size * size; i++) {
        gotoxy(col * 3 + 10, row * 3 + 10);
        printf("%d", i);

        if (i % size != 0) {
            row--;
            col--;

            if (row < 1) row = size;
            if (col < 1) col = size;
        }
        else
            row++;
    }

}