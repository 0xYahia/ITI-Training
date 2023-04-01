#include <iostream>

using namespace std;

struct Complex {
    private:
        int real;
        int img;

    public:
        Complex() {
            this->real = this->img = 0;
            //cout << "Constructor called.\n";
        }
        Complex(int _real, int _img) {
            this->real = _real;
            img = _img;
            //cout << "Constructor called.\n";
        }
        void setReal(int _real) {
            real = _real;
        }
        int getReal() const {
            return real;
        }
        void setImg(int _img) {
            img = _img;
        }
        int getImg() const {
            return img;
        }
        Complex add(const Complex& right) {
            Complex resVal;
            resVal.real = this->real + right.real;
            resVal.img = this->img + right.img;

            return resVal;
        }
        void print() {
            if (real != 0 && img == 1) cout << real << " + " << "i\n" ;
            else if (real != 0 && img == -1) cout << real << " - " << "i\n" ;
            else if (real != 0 && img > 0) cout << real << " + " << img << "i\n" ;
            else if (real != 0 && img < 0) cout << real << " - " << -img << "i\n" ;
            else if (real != 0 && img == 0) cout << real << "\n";
            else if (real == 0 && img == 1) cout << "i\n";
            else if (real == 0 && img == -1) cout << "-i\n";
            else if (real == 0 && img > 0) cout << img << "i\n";
            else if (real == 0 && img < 0) cout << img << "i\n";
            else if (real == 0 && img == 0) cout << 0 << "\n";
        }
        ~Complex() {
            //cout << "Destructor called.\n";
        }
};

Complex sub(const Complex& left, const Complex& right) {
    Complex resVal;
    resVal.setReal(left.getReal() + right.getReal());
    resVal.setImg(left.getImg() + right.getImg());
}

int main() {
    Complex first(5, 3), second(2, 1);
    first.add(second);

    Complex third = sub(first, second);

    char ch;
    do {
        cin >> ch;
    Complex c1;
    int real, img;
    cout << "Enter Real: ";
    cin >> real;

    cout << "Enter Img: ";
    cin >> img;

    c1.setReal(real);
    c1.setImg(img);

    cout << "Output: ";
    c1.print();

    } while (ch != 'y');
}
