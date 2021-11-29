#include <iostream>

using namespace std; 
//二分搜索法，下面以整数数组为例进行搜索比较，非递归算法 
int BinarySearch(int* a,const int& x,int start,int end){
	while(start <= end){
		int mid = (start+end)/2;
		if(a[mid]== x) return mid;
		else if(a[mid]>x) end = mid-1;  //这里的减一很有必要 
		else start = mid+1;  //这里的加一很有必要 
	}
	return -1;

}

//二分搜索法递归调用，下面还是以整数数组为例
int BinarySearchRecursion(int* a,const int& x,int start,int end)
{
	if(start <= end){
		int mid = (start+end)/2;
		if(a[mid] == x) return mid;
		else if(a[mid]>x) BinarySearchRecursion(a,x,start,mid-1);
		else BinarySearchRecursion(a,x,mid+1,end);
	}
	else{
		return -1;
	}
} 

int main(int argc, char *argv[]) {
	int a[10] = {1,2,3,4,5,6,7,8,9,11};
	//非递归调用 
	//cout<<BinarySearch(a,11,0,9);
	//递归调用
	 cout<<BinarySearchRecursion(a,1,0,9);
}
