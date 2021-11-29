#include <iostream>

using namespace std; 
//��������������������������Ϊ�����������Ƚϣ��ǵݹ��㷨 
int BinarySearch(int* a,const int& x,int start,int end){
	while(start <= end){
		int mid = (start+end)/2;
		if(a[mid]== x) return mid;
		else if(a[mid]>x) end = mid-1;  //����ļ�һ���б�Ҫ 
		else start = mid+1;  //����ļ�һ���б�Ҫ 
	}
	return -1;

}

//�����������ݹ���ã����滹������������Ϊ��
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
	//�ǵݹ���� 
	//cout<<BinarySearch(a,11,0,9);
	//�ݹ����
	 cout<<BinarySearchRecursion(a,1,0,9);
}
