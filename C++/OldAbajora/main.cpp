#include <iostream>
#include "graphics.h"

using namespace std;

class Point {
    private:
        int x;
        int y;
    public:
        void setX(int _x){x =_x;}
        void setY(int _y){y =_y;}
        int getX(){return x;}
        int getY(){return y;}
        Point(){x = y = 0;}
        Point(int _x, int _y){x = _x; y = _y;}
        Point(int _num){x = y =_num;}
        ~Point(){}
        Point(const Point& old){x = old.x; y = old.y;}
};

class Line {
    private:
        Point start;
        Point end;
        int color;

    public:
        void setStart(Point _start){start = _start;}
        void setEnd(Point _end){end =_end;}
        Point getStart(){return start;}
        Point getEnd(){return end;}
        void setColor(int _color){color = _color;}
        int getColor(){return color;}

        Line() { color = 0;}
        Line(int x1, int y1, int x2, int y2, int _color) {
            ///start x1 y2  end x3 y4   color5
            start.setX(x1);
            start.setY(y1);
            end.setX(x2);
            end.setY(y2);
            color=_color;
        }
        Line(Point _start,Point _end,int _color) {
            start = _start;
            end = _end;
            color =_color;
        }
        ~Line(){}
        Line(const Line& old) {
            start = old.start;
            this->end = old.end;
            this->color = old.color;
        }
        void Draw() {
            setcolor(color);
            line(start.getX(),start.getY(),end.getX(),end.getY());
        }
};

class Rect {
    Point ul;
    Point lr;
    int color;
    public:
        void setUL(Point _ul){ul=_ul;}
        void setLR(Point _lr){lr=_lr;}
        Point getUL(){return ul;}
        Point getLR(){return lr;}
        void setColor(int _color){color=_color;}
        int getColor(){return color;}
        Rect()
        {
            color=0;
        }
        Rect(int x1,int y1,int x2,int y2,int _color):
        ul(x1,y1),lr(x2,y2) {
            ///Compiler ul 1,2     lr 3,4
            color=_color;
        }
        ~Rect(){}
        Rect(const Rect& old):ul(old.ul),lr(old.lr) {
            color = old.color;
        }
        void Draw() {
            setcolor(color);
            rectangle(ul.getX(),ul.getY(),lr.getX(),lr.getY());
        }

};

class Circle
{
    Point center;
    int radius;
    int color;

    public:
        void setCenter(Point _center) {center = _center;}
        Point getCenter() {return center;}
        void setRadius(int _radius){radius = _radius;}
        int getRadius(){return radius;}
        void setColor(int _color){color=_color;}
        int getColor(){return color;}

        Circle() {color = 0; radius = 0;}
        Circle(int x, int y, int _radius, int _color) :  center(x, y) {
            radius = radius;
            color = _color;
        }

        void Draw() {
            setcolor(color);
            circle(center.getX(),center.getY(),radius);
        }
};

class Triangle
{
    private:
        Point p1;
        Point p2;
        Point p3;
        int color;

    public:
        void setP1(Point _p1){p1 = _p1;}
        void setP2(Point _p2){p2 = _p2;}
        void setP3(Point _p3){p3 = _p3;}
        Point getP1(){return p1;}
        Point getP2(){return p2;}
        Point getP3(){return p3;}
        void setColor(int _color){color=_color;}
        int getColor(){return color;}

        Triangle() { color = 0;}
        Triangle(int x1,int y1,int x2,int y2, int x3, int y3, int _color) :
        p1(x1,y1), p2(x2,y2), p3(x3,y3) {
            color = _color;
        }

        void Draw() {
            setcolor(color);
            line(p1.getX(),p1.getY(),p2.getX(), p2.getY());
            line(p2.getX(),p2.getY(),p3.getX(), p3.getY());
            line(p3.getX(),p3.getY(),p1.getX(), p1.getY());
        }
};

int main() {
    initgraph();
    setcolor(20);

    rectangle(171,198,303,237);

    line(253,196,253,143);
    line(219,144,219,198);
    line(230,35,210,125);
    line(255,45,265,125);
    line(272,208,289,223);
    line(289,223,261,223);
    line(261,223,272,208);

    circle(238,127,50);
    circle(238,70,32);

    int n;
    cin >> n;
    return 0;
}
