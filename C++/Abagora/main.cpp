#include <iostream>
 #include "graphics.h"

using namespace std;

class Point {
    private:
        int x;
        int y;

    public:
        Point() {x = y = 0;}
        Point(int _x, int _y) { x = _x; y = _y; }
        Point(const Point& old) { x = old.x; y = old.y; }

        void setX(int _x) {x = _x;}
        int getX() {return x;}

        void setY(int _y) {y = _y;}
        int getY() {return y;}

        Point& operator=(const Point& right) {
            x = right.x;
            y = right.y;
            return *this;
        }

};
class Line {
    private:
        Point start;
        Point end;
        int color;

    public:
        Line() : start(0, 0), end(0,0) { color = 0; }
        Line(Point _start, Point _end, int _color) {
            start = _start;
            end = _end;
            color = _color;
        }
        Line(int x1, int y1, int x2, int y2, int _color)
        : start(x1, y1), end(x2, y2) {
            color = color;
        }
        Line(const Line& old) {
            start = old.start;
            end = old.end;
            this->color = old.color;
        }

        void setStart(Point _start) { start = _start; }
        Point getStart() { return start; }

        void setEnd(Point _end) { end = _end; }
        Point getEnd() { return end; }

        void setColor(int _color) {color = _color;}
        int getColor() { return color; }


        void Draw() {
            setcolor(color);
            line(start.getX(), start.getY(), end.getX(), end.getY());
        }
        ~Line(){}

};
class Rect {
    private:
        Point ul;
        Point lr;
        int color;

    public:
        Rect() {
            // point will be zero by default.
            color = 0;
        }
        Rect(int x1, int y1, int x2, int y2, int _color)
        : ul(x1,y1), lr(x2, y2) {
            color = _color;
        }
        Rect(const Rect& old) : ul(old.ul), lr(old.lr) {
            color = old.color;
        }
        void setUL(Point _ul) {ul = _ul;}
        Point getUL() {return ul;}

        void setLR(Point _lr) {lr = _lr;}
        Point getLR() {return lr;}

        void setColor(int _color) {color = _color;}
        int getColor() { return color; }

        void Draw() {
            setcolor(color);
            rectangle(ul.getX(), ul.getY(), lr.getX(), lr.getY());
        }

};
class Circle {
    private:
        Point center;
        int radius;
        int color;

    public:
        Circle() {color = 0; radius = 0;}
        Circle(int x, int y, int _radius, int _color) :  center(x, y) {
            radius = _radius;
            color = _color;
        }

        void setCenter(Point _center) {center = _center;}
        Point getCenter() {return center;}

        void setRadius(int _radius){radius = _radius;}
        int getRadius(){return radius;}

        void setColor(int _color){color=_color;}
        int getColor(){return color;}

        void Draw() {
            setcolor(color);
            circle(center.getX(), center.getY(), radius);
        }

};

class Triangle {
    private:
        Point p1;
        Point p2;
        Point p3;
        int color;

    public:
        Triangle() { color = 0;}
        Triangle(Point _p1, Point _p2, Point _p3, int _color)
        : p1(_p1), p2(_p2), p3(_p3) {
            color = _color;
        }
        Triangle(int x1,int y1,int x2,int y2, int x3, int y3, int _color)
        : p1(x1,y1), p2(x2,y2), p3(x3,y3) {
            color = _color;
        }

        void setP1(Point _p1){p1 = _p1;}
        Point getP1(){return p1;}

        void setP2(Point _p2){p2 = _p2;}
        Point getP2(){return p2;}

        void setP3(Point _p3){p3 = _p3;}
        Point getP3(){return p3;}

        void setColor(int _color){color=_color;}
        int getColor(){return color;}

        void Draw() {
            setcolor(color);
            line(p1.getX(),p1.getY(),p2.getX(), p2.getY());
            line(p2.getX(),p2.getY(),p3.getX(), p3.getY());
            line(p3.getX(),p3.getY(),p1.getX(), p1.getY());
        }
};
int main() {
    initgraph();
    int color = 4;

    setcolor(color);

    Line line1(390,300,390,340,color);
    line1.Draw();
    // I don't know why!
    Line line2(450,200,450,240,color);
    Line line3(450,300,450,340,color);
    line3.Draw();

    Line line4(420,120,420,300,10);
    Line line5(420,120,420,300,10);
    Line line6(420,120,420,300,10);
    line6.Draw();

    Rect rect(270, 340, 600, 450, color);
    rect.Draw();

    Point p1(540, 369);
    Point p2(502, 418);
    Point p3(583, 417);


    Triangle triangle(p1, p2, p3, color);
    triangle.Draw();

    Circle c1(420,260,100, color);
    c1.Draw();

    Circle c2(420,100,50, color);
    c2.Draw();



    int x;
    cin >> x;
}

