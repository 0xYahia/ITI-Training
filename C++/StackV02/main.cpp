#include <iostream>

using namespace std;

class Stack {
private:
    static int nOfStacks;
    int tos;
    int* arr;
    int size;

public:
    Stack() {
        nOfStacks++;
        tos = 0;
        size = 5;
        arr = new int[size];
    }
    Stack(int _size) {
        nOfStacks++;
        tos = 0;
        size = _size;
        arr = new int[size];
    }
    Stack(const Stack& old) {
        this->tos = old.tos;
        size = old.size;
        arr = new int[size];

        for (int i = 0; i < tos; i++)
            this->arr[i] = old.arr[i];
    }
    void push(int num) {
        if (!isFull())
            arr[tos++] = num;
        else
            cout << "Stack is Full\n";
    }
    int pop() {
        if (!isEmpty())
            return arr[--tos];

        cout << "Stack is Empty\n";
        return -123456;
    }
    bool isFull() {
        return tos == size;
    }
    bool isEmpty() {
        return tos == 0;
    }
    Stack& operator=(const Stack& right) {
        delete[] this->arr;
        this->tos = right.tos;
        size = right.size;
        arr = new int[size];
        for (int i = 0; i < tos; i++)
            this->arr[i] = right.arr[i];

        return *this;
    }
    Stack reverseStack() {
        //Stack retVal = this;
        Stack retVal;
        retVal.tos = tos;
        retVal.size = size;
        for (int i = 0; i < tos; i++)
            retVal.arr[i] = arr[tos - i - 1];

        return retVal;
    }
    bool operator==(Stack& right) {
        bool isEqualNormal = true;
        bool isEqualReversed = true;

        if (tos != right.tos || size != right.size)
            return false;

        for (int i = 0; i < tos; i++) {
            if (arr[i] != right.arr[i]) {
                isEqualNormal = false;
                break;
            }
        }

        Stack temp = right.reverseStack();

        for (int i = 0; i < tos; i++) {
            if (arr[i] != temp.arr[i]) {
                isEqualReversed = false;
                break;
            }
        }
        return (isEqualNormal || isEqualReversed);

    }
    Stack operator+(const Stack& right) {

        Stack retVal(this->size + right.size);

        retVal.tos = this->tos + right.tos;

        for (int i = 0; i < this->tos; i++)
            retVal.arr[i] = this->arr[i];

        for (int i = 0; i < right.tos; i++)
            retVal.arr[i + right.tos] = right.arr[i];

        return retVal;
    }
    ~Stack() {
        nOfStacks--;
        for (int i = 0; i < size; i++)
            arr[i] = -1;
        delete[] arr;
    }
    friend void printStack(Stack s);
};

void printStack(Stack s) {
    for (int i = 0; i < s.tos; i++)
        cout << s.arr[i] << " ";
    cout << "\n";
}

//initializing Static variables
int Stack::nOfStacks = 0;

int main() {
    Stack s1, s2;
    s1.push(5);
    s1.push(3);
    s1.push(1);

    printStack(s1);
    s2 = s1.reverseStack();
    printStack(s2);

    cout << "Is Equel ==> " << boolalpha << (s1 == s2) << endl;

    Stack s3;
    s3 = s1 + s2;
    printStack(s3);

    return 0;
}
