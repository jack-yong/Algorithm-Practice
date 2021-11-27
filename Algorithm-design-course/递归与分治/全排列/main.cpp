#include <iostream>

using namespace std; 

//交换函数，交换数组中的两个数据 
void swap(int* a,int* b){
	int temp;
	temp = *b;
	*b = *a;
	*a = temp;
}

//全排列的递归函数
/*
	@param:n 表示数组中的起始下标 
	@param:m 表示数组中的结束下标  
*/ 
int perm(int* a,int n,int m){
	//n == m是进行全排列递归的结束标志，也就是所谓的边界条件 
	if(n == m){
		for(int i=0;i<=m;i++){
			cout<<a[i];
		}
		cout<<endl;
	}
	//进行循环递归的操作 
	else{
		for(int j=n;j<=m;j++){
			swap(a+j,a+n);
			perm(a,n+1,m);
			swap(a+j,a+n);  //此处的交换操作是为了将数组中的数据进行归位的操作 
		}
	}
}

int main(int argc, char *argv[]) {
	int arr[]= {1,2,3,4,5,6,7,8,9,10};
	perm(arr,0,2);
	
}
