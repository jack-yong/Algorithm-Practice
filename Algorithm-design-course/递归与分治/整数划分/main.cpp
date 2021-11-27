#include <iostream>

using namespace std; 

//整数划分问题,根据n,m的输入分为四种情况 
int divide(int n,int m){
	if(n == 1|| m == 1) return 1;
	if(n < m) return divide(n,n);
	if(n == m) return divide(n,n-1)+1;
	else return divide(n,m-1)+divide(n-m,m); 
} 
int main(int argc, char *argv[]) {
	cout<<divide(6,4);
	return 0;
}
