#include <iostream>
#include "graphics.h"

using namespace std;

class Shape {
    protected:
        int color;
    public:
        Shape() {color = 0;}
        Shape(int _color) {color = _color;}
        Shape(const Shape& old) {color = old.color;}

        void setColor(int _color) {color = _color;}
        int getColor() { return color; }
        virtual void Draw() {}
};

class Point {
    private:
        int x;
        int y;

    public:
        Point() {x = y = 0;}
        Point(int _x, int _y) {x = _x; y = _y; }
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
        ~Point() {}

};
class Line : public Shape {
    private:
        Point start;
        Point end;

    public:
        Line() : start(0, 0), end(0,0) { }
        Line(Point _start, Point _end, int _color) {
            start = _start;
            end = _end;
            color = _color;
        }
        Line(int x1, int y1, int x2, int y2, int _color)
        : start(x1, y1), end(x2, y2), Shape(_color) {}

        Line(const Line& old): Shape(old) {
            start = old.start;
            end = old.end;
        }

        void setStart(Point _start) { start = _start; }
        Point getStart() { return start; }

        void setEnd(Point _end) { end = _end; }
        Point getEnd() { return end; }


        void Draw() {
            setcolor(color);
            line(start.getX(), start.getY(), end.getX(), end.getY());
        }
        ~Line(){}

};
class Rect : public Shape {
    private:
        Point ul;
        Point lr;

    public:
        Rect() {}
        Rect(int x1, int y1, int x2, int y2, int _color)
        : ul(x1,y1), lr(x2, y2), Shape(_color)  { }
        Rect(const Rect& old) : ul(old.ul), lr(old.lr) {
            color = old.color;
        }
        void setUL(Point _ul) {ul = _ul;}
        Point getUL() {return ul;}

        void setLR(Point _lr) {lr = _lr;}
        Point getLR() {return lr;}

        void Draw() {
            setcolor(color);
            rectangle(ul.getX(), ul.getY(), lr.getX(), lr.getY());
        }

};
class Circle : public Shape {
    private:
        Point center;
        int radius;
    public:
        Circle() {radius = 0;}
        Circle(int x, int y, int _radius, int _color) :  center(x, y) {
            radius = _radius;
            color = _color;
        }

        void setCenter(Point _center) {center = _center;}
        Point getCenter() {return center;}

        void setRadius(int _radius){radius = _radius;}
        int getRadius(){return radius;}

        void Draw() {
            setcolor(color);
            circle(center.getX(), center.getY(), radius);
        }

};

class Triangle : public Shape {
    private:
        Point p1;
        Point p2;
        Point p3;

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

        void Draw() {
            setcolor(color);
            line(p1.getX(),p1.getY(),p2.getX(), p2.getY());
            line(p2.getX(),p2.getY(),p3.getX(), p3.getY());
            line(p3.getX(),p3.getY(),p1.getX(), p1.getY());
        }
};
class Picture {
    private:
        Shape** sptr;
        int sSize;

    public:
        Picture() {
            sptr = NULL;
            sSize = 0;
        }
        void setShapes(Shape** _sptr, int _sSize) {
            sptr = _sptr;
            sSize = _sSize;
        }
        void DoIt() {
            for (int i = 0; i < sSize; i++)
                sptr[i]->Draw();
        }

};
int main() {
    int color = 2;
    setcolor(color);
    initgraph();

    Line line1(390,300,390,340,color);
    Line line2(450,300,450,340,color);
    Line line3(420,120,420,300,color);

    Rect rect(270, 340, 600, 450, color);

    Triangle triangle(Point(540, 369), Point(502, 418), Point(583, 417),color);

    Circle c1(420,260,100, color);
    Circle c2(420,100,50, color);

    Shape* sptr[] = {&line1, &line2, &line3, &rect, &triangle, &c1, &c2};

    Picture picture;
    picture.setShapes(sptr, 7);
    picture.DoIt();


    int x;
    cin >> x;
}

