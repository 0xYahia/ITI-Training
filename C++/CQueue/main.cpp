#include<iostream>

using namespace std;

class CQueue {
    private:
        int* arr;
        int head;
        int tail;
        int capacity;
        int count;

    public:
        CQueue() {
            capacity = 3;
            arr = new int[3];
            head = tail = count = 0;
        }
        void enqueue(int item) {
            if (capacity == count)
                cout << "Full";
            else {
                arr[tail] = item;
                tail = (tail + 1) % capacity;
                count++;
            }
        }
        int deqeue() {
            int retVal = -1234;

            if (count == 0)
                cout << "Queue is Empty\n";
            else {
                retVal = arr[head];
                arr[head] = 0;
                head = (head + 1) % capacity;
                count--;
            }

            return retVal;
        }
        void print() {
            for (int i = 0; i < capacity; i++)

                cout << arr[i] << " ";
        }

};

int main() {
    CQueue q;

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.deqeue();
    q.enqueue(100);
    q.deqeue();
    q.print();
}
