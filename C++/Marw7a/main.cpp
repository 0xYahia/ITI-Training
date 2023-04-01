#include <iostream>
#include "graphics.h"
#include <thread>
#include <chrono>


using namespace std;

int main()
{
    initgraph();
    setcolor(80);

    while(1){
        //first circle

    circle(350,105,150);

    circle(350,350,150);

    circle(500,230,150);
system("cls");
//    circle(200,230,80);

    Sleep(1000);

    circle(430,160,80);

    circle(430,300,80);

    circle(270,160,80);

//    circle(270,300,80);
    system("cls");


    }



   // circle(500,230,80);


    return 0;
}
