#include <iostream>

using namespace std; 

//���̸�������
//����,ʹ�ö�ά�����ʾ 

#define N 8

//����Ĺ̶��ڴ������ 
int board[1025][1025];

static int tile=1;

 
void ChessBoard(int tr,int tc,int dr,int dc,int size){
	if(size==1)return;
	int t = tile++;
	int s = size/2;
	//�������Ͻ�������
	if(dr < tr+s && dc < tc+s){
		ChessBoard(tr,tc,dr,dc,s);
	}else{
		board[tr+s-1][tc+s-1] = t;
		ChessBoard(tr,tc,tr+s-1,tc+s-1,s);
	}
	//�������Ͻ�������
	if(dr < tr+s && dc >= tc+s){
		ChessBoard(tr,tc+s,dr,dc,s);
	}else{
		board[tr+s-1][tc+s] = t;
		ChessBoard(tr,tc+s,tr+s-1,tc+s,s);
	}
	//�������½�����
	if(dr >= tr+s && dc<tc+s)
	{
		ChessBoard(tr+s,tc,dr,dc,s);
	} 
	else{
		board[tr+s][tc+s-1] = t;
		ChessBoard(tr+s,tc,tr+s,tc+s-1,s);
	}
	//�������½�����
	if(dr >= tr+s && dc>=tc+s)
	{
		ChessBoard(tr+s,tc+s,dr,dc,s);
	} 
	else{
		board[tr+s][tc+s] = t;
		ChessBoard(tr+s,tc+s,tr+s,tc+s,s);
	}
	 
}
int main(int argc, char *argv[]) {
	ChessBoard(0,0,0,0,N);
	for(int i =0;i<N;i++)
	{
		for(int j =0;j<N;j++)
		{
			cout<<board[i][j]<<"	";
		}
		cout<<endl;
	}
	return 0;
}
