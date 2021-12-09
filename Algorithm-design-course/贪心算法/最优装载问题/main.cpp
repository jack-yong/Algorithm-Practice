#include <iostream>

using namespace std;

struct load{
	int index;
	int w;
}box[1001];

bool cmp(load a,load b)
{
	if(a.w < b.w) return true;
	else{
		return false;
	}
}
int main(int argc, char *argv[]) {
	int c,n;
	cin>>c>>n;
	load box = new load[n];
	
}
