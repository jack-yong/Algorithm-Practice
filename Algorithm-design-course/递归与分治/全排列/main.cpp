#include <iostream>

using namespace std; 

//�������������������е��������� 
void swap(int* a,int* b){
	int temp;
	temp = *b;
	*b = *a;
	*a = temp;
}

//ȫ���еĵݹ麯��
/*
	@param:n ��ʾ�����е���ʼ�±� 
	@param:m ��ʾ�����еĽ����±�  
*/ 
int perm(int* a,int n,int m){
	//n == m�ǽ���ȫ���еݹ�Ľ�����־��Ҳ������ν�ı߽����� 
	if(n == m){
		for(int i=0;i<=m;i++){
			cout<<a[i];
		}
		cout<<endl;
	}
	//����ѭ���ݹ�Ĳ��� 
	else{
		for(int j=n;j<=m;j++){
			swap(a+j,a+n);
			perm(a,n+1,m);
			swap(a+j,a+n);  //�˴��Ľ���������Ϊ�˽������е����ݽ��й�λ�Ĳ��� 
		}
	}
}

int main(int argc, char *argv[]) {
	int arr[]= {1,2,3,4,5,6,7,8,9,10};
	perm(arr,0,2);
	
}
