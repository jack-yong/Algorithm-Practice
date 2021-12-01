#include <iostream>

//快速排序，以下还是以int型数组为例
using namespace std; 
void swap(int* a ,int* b){
	int temp;
	temp = *a;
	*a = *b;
	*b = temp;
}

void quick_sort(int* a,int start,int end) 
{
	int privot_pos = start - 1;
	int i =start;
	int j=end;
	if (i -j > 0) return;
	while(i <= j){
		if(a[i] <= a[privot_pos] ){
			i++;
		}
		else if(a[j] >= a[privot_pos]){
			j--;
		}
		else {
			swap(a+i,a+j);
		}
	}
	swap(a+privot_pos,a+j);
	quick_sort(a,start,j-1);
	quick_sort(a,i+1,end);
}


int main(int argc, char *argv[]) {
	int a[] = {11,10,9,8,7,6,5,4,3,2};
	quick_sort(a,1,9);
	for(int i=0;i<10;i++)
	{
		cout<<a[i]<<",";
	}
}
