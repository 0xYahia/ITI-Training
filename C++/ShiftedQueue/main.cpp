#include <iostream>

using namespace std;

class Queue {
    private:
        int head;
        int tail;
        int arr[5];
        int size;
    public:
        Queue() {
            head = 0;
            tail = 0;
            size = 5;
        }
        void enque(int num) {
            if (!isFull()) {
                arr[tail++] = num;
            }
            else
                cout << "Queue is Full\n";
        }
        int dequeue() {
            int retVal = -12345;
            if (!isEmpty()) {
                retVal = arr[head];
                for (int i = 0; i < size - 1; i++)
                    arr[i] = arr[i + 1];
                tail--;
            }
            else
                cout << "Queue is Empty\n";
            return retVal;
        }
        bool isFull() {
            return tail == size;
        }
        bool isEmpty() {
            return tail == 0;
        }
        void printQueue() {
            for (int i = 0; i < tail; i++)
                cout << arr[i] << " ";
        }
};

int main() {
    Queue q;
    q.enque(5);
    q.enque(4);
    q.enque(3);
    q.enque(2);
    q.enque(1);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.enque(101);

    q.printQueue();



    return 0;
}
