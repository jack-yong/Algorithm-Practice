#include <iostream>

using namespace std; 

//��������������еĶ�̬�滮�㷨,ʱ�临�ӶȲ��Ǻ����룬�����о�һ���Ż��㷨 
#define NUM 9
int a[NUM]= {0,65,158,170,155,239,300,207,389};
int b[NUM] = {0};
int fun(int n){
	int i,j;
	b[1] = 1;
	int max = 0;
	for(i = 2;i<=n;i++)
	{
		int k = 0;
		for(j =1;j<i;j++)
		{
			if(a[j]<=a[i] && k<b[j]){
				k = b[j];
			} 
		}
		b[i] = k+1;
		if(max<b[i]){
			max = b[i];
		}
	}
	return max;
}

int main(int argc, char *argv[]) {
	cout<<fun(NUM);
}
