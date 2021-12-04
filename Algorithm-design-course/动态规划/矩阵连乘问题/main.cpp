#include <iostream>

using namespace std;
 
//计算最优值的动态规划算法
#define NUM 7
int p[NUM] = {50,10,40,30,5,20,15};
int m[NUM][NUM];
int s[NUM][NUM];

void MatrixChain(int n)
{

	//将矩阵对角线上面的元素赋值为0，因为此时矩阵链无需做任何计算，计算次数为0 
	for(int i =1;i<=n;i++) m[i][i] = 0; 
	//r是i和j之间的间距
	for(int r=2;r<=n;r++) 
	{
		//i是不同间距的初始位置(n-(r-1)可以保证不会数据越界) 
		for(int i=1;i<=n-r+1;i++)
		{
			int j=i+r-1;
			//计算初始值从i处断开,k表示断开位置，此时断开位置为1 
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
