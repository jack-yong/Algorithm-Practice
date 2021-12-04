#include <iostream>

using namespace std;
 
//��������ֵ�Ķ�̬�滮�㷨
#define NUM 7
int p[NUM] = {50,10,40,30,5,20,15};
int m[NUM][NUM];
int s[NUM][NUM];

void MatrixChain(int n)
{

	//������Խ��������Ԫ�ظ�ֵΪ0����Ϊ��ʱ�������������κμ��㣬�������Ϊ0 
	for(int i =1;i<=n;i++) m[i][i] = 0; 
	//r��i��j֮��ļ��
	for(int r=2;r<=n;r++) 
	{
		//i�ǲ�ͬ���ĳ�ʼλ��(n-(r-1)���Ա�֤��������Խ��) 
		for(int i=1;i<=n-r+1;i++)
		{
			int j=i+r-1;
			//�����ʼֵ��i���Ͽ�,k��ʾ�Ͽ�λ�ã���ʱ�Ͽ�λ��Ϊ1 
			m[i][j] = m[i+1][j] + p[i-1]*p[i]*p[j];
			s[i][j] = i;
			for(int k = i+1;k<j;k++)
			{
				int t = m[i][k] + m[k+1][j] +p[i-1]*p[k]*p[j];
				if(t < m[i][j]){
					m[i][j] = t;
					s[i][j] = k;
				}
			} 
		}
	}
}

void TraceBack(int i,int j)
{

	if(i==j) cout<<"A"<<i;
	else{
		cout<<"(";
		TraceBack(i,s[i][j]);
		TraceBack(s[i][j]+1,j);
		cout<<")";
	}
} 


int main(int argc, char *argv[]) {
	MatrixChain(6);
	TraceBack(1,6);
	return 0;
}
