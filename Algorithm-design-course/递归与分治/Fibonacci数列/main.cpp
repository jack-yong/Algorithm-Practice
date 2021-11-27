#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */
using namespace std;
int fibonacci(int n){
	if(n <=1) return 1;
	else{
		return fibonacci(n-2)+fibonacci(n-1);
	}
} 

int main(int argc, char *argv[]) {
	int num;
	num = fibonacci(3);
	cout<<num;
	return 0;
}
