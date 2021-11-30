#include <iostream>

using namespace std;
//下面是归并排序的相关算法 
//这里的归并排序还是以int数组为例

//进行归并排序的单元操作，其操作的数组空间是由小到大的 
void merge_sort(int* a,int start1,int end1,int start2,int end2)
{
	int length = (end1-start1 +1) +(end2 -start2 +1);
	if(length == 0) return;
	int sp1 = start1, sp2 = start2;
    int* p = new int[length];
    int pos = 0;
    while (sp1 <= end1 && sp2 <= end2) {
        if (a[sp1] < a[sp2]) {
            p[pos++] = a[sp1++];
        } else {
            p[pos++] = a[sp2++];
        }
    }
    if (sp1 > end1) {
        while (sp2 <= end2) {
            p[pos++] = a[sp2++];
        }
    } else {
        while (sp1 <= end1) {
            p[pos++] = a[sp1++];
        }
    }
    sp1 = start1, sp2 = start2, pos = 0;
    for (int k = sp1; k <= end1; k++) {
        a[sp1++] = p[pos++];
    }
    for (int q = sp2; q <= end2; q++) {
        a[sp2++] = p[pos++];
    }
    delete(p);
}

//归并排序的递归调用 
void merge(int* a,int start,int end){
	if (start == end) return;
    int min = (start + end) / 2;
    merge(a, start, min);
    merge(a, min + 1, end);
    merge_sort(a, start, min, min + 1, end);
} 




int main(int argc, char *argv[]) {
	int a[] = {1,3,2,4,6,5,8,7,9,10};
	merge(a,0,9);
	for(int i =0;i<10;i++)
	{
		cout<<a[i]<<",";
	}
	return 0;
}
