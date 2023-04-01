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
         void print() {
            if (real != 0 && img == 1) cout << real << " + " << "i\n";
            else if (real != 0 && img == -1) cout << real << " - " << "i\n";
            else if (real != 0 && img > 0) cout << real << " + " << img << "i\n";
            else if (real != 0 && img < 0) cout << real << " - " << -img << "i\n";
            else if (real != 0 && img == 0) cout << real << "\n";
            else if (real == 0 && img == 1) cout << "i\n";
            else if (real == 0 && img == -1) cout << "-i\n";
            else if (real == 0 && img > 0) cout << img << "i\n";
            else if (real == 0 && img < 0) cout << img << "i\n";
            else if (real == 0 && img == 0) cout << 0 << "\n";
        }
        // Operators overloading
        // c1 + c2
        Complex operator+(const Complex& right) {
            return Complex(real + right.real, img + right.img);
        }
        Complex operator+=(const Complex& right) {
           this->real = real + right.real;
           img += right.img;
           return *this;
        }
        
        //++c1 -- By value true, By reference true
        Complex& operator++() {
            this->real++;
            img++;
            return *this;
        }
        // لما بتحط انبوت بارمتر الكومبايلر بيفرق بينها وبين البرفيكس سام
        // مش هتفرق كاتب انت دامي او انتي تيمبلت او انت وخلاص
        Complex operator++(int /*dummy*/) {
            Complex retVal(*this); //*this hold object بعمل اوبجكت بدلالة اوبجكت
            
            this->real++;
            img++;
            return retVal;
        }
        Complex operator+(int num) {
            Complex retVal(real + num, img);
            return retVal;
        }
        int operator>(Complex right) {
            return real > right.real &&  img > right.img;
        }
        // c3 = c1 --> useless -- c3.oprator=(c1);
        Complex& operator=(const Complex& right) {
            this->real = 1234;
            this->img = 1234;
            return *this;
        }
        // Casting int x = (int) c1;
        operator int() {
            return this->real;
        }

        ~Complex() {
            //cout << "Destructor called.\n";
        }
};

// 10 + c1
Complex operator+(int num, Complex right) {
    Complex retVal;
    retVal.setReal(num + right.getReal());
    retVal.setImg(num + right.getImg());

    return retVal;
    // another solution
    return right + num;
}

int main() {
    int x = Complex(33,10);
    cout << x; // 33
}
