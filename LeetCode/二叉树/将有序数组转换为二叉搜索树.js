/*
 * @Author: cyong
 * @Date: 2021-12-14 09:53:19
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-14 11:40:25
 * @FilePath: \LeetCode\二叉树\将有序数组转换为二叉搜索树.js
 * @Description: 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
 */


/**
 * @author: cyong
 * @description: 核心的思路就是中序遍历的代码
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let sortnode = function(start,end){
        if(start > end){
            return null
        }
        //注意js中直接相除不是整数
        let mid = parseInt((start+end)/2)
        let node = new TreeNode(nums[mid])
        node.left = sortnode(start,mid-1)
        node.right = sortnode(mid+1,end)
        return node
    }
    return sortnode(0,nums.length-1)
};