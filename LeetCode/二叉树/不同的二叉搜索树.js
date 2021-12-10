/*
 * @Author: cyong
 * @Date: 2021-12-10 10:38:12
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-10 11:38:27
 * @FilePath: \LeetCode\二叉树\不同的二叉搜索树.js
 * @Description: 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 */

/**
 * @author: cyong
 * @description: 需要注意到每种可能的二叉搜索树，其中序遍历都是顺序结果。第一个元素可以有很多种情况，所以我觉得应该采用动态规划
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    const arr = new Array(n+1).fill(0)
    arr[0] = 1;
    arr[1] = 1;
    for(let i=2;i<=n;i++)
    {
        for(let j=1;j<=i;j++)
        {
            arr[i] += arr[j-1] * arr[i-j]
        }
    }
    return arr[n]
};