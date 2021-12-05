#include <iostream>

using namespace std; 
//最长公共子序列 

#define NUM 100
int c[NUM][NUM];
int b[NUM][NUM];
void LCSLength(int m,int n,const char x[],char y[]){
	int i,j;
	//数组c的第0行，第0列置0
	for(i = 1;i<=m;i++) c[i][0] = 0;
	for(i = 1;i<=n;i++) c[0][i] = 0;
	//根据递推公式构造数组c
	for(i = 1;i<=m;i++)
	{
		for(j= 1;j<=n;j++)
		{
			 if(x[i] == y[j])
			 {
			 	c[i][j] = c[i-1][j-1]+1;
			 	b[i][j]  =1;
			 }
			 else if(c[i-1][j]>=c[i][j-1]){
			 	c[i][j] = c[i-1][j];
			 	b[i][j] = 2;
			 }
			 else{
			 	c[i][j] = c[i][j-1];
			 	b[i][j] = 3;
			 }
		}
	} 
}

void LCS(int i,int j,char x[])
{
	if(i == 0 || j==0)return;
	if(b[i][j] == 1){
		LCS(i-1,j-1,x);
		cout<<x[i];
	}
	else if(b[i][j] == 2){
		LCS(i-1,j,x);
	}
	else{
		LCS(i,j-1,x);
	}
}
int main(int argc, char *argv[]) {
	char x[8] = {'*','A','B','C','B','D','A','B'};
	char y[7] = {'*','B','D','C','A','B','A'};
	LCSLength(7,6,x,y);
	for(int i=0;i<=7;i++){
		for(int j=0;j<=6;j++)
		{
			cout<<c[i][j]<<" ";
		}
		cout<<endl;
	}
	LCS(7,6,x);
	return 0;
}
