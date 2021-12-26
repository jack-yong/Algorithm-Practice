/*
 * @Author: cyong
 * @Date: 2021-12-26 15:49:25
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-26 15:52:39
 * @FilePath: \LeetCode\二叉树\最大二叉树.js
 * @Description: 654. 最大二叉树
 */


/**
 * @author: cyong
 * @description: 重点学习如何控制索引，以及这种解题框架的思维，主要用到的是前序遍历的框架
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let  constructMaximumnode = function(startpos,endpos){
        if(startpos > endpos) return
        let maxnum = startpos
        for(let i =startpos;i<=endpos;i++){
            if(nums[i] > nums[maxnum]){
                maxnum = i
            }
        }
        let midnode =  new TreeNode(nums[maxnum])
        midnode.left = constructMaximumnode(startpos,maxnum-1) || null
        midnode.right = constructMaximumnode(maxnum+1,endpos) || null
        return midnode
    }
    return constructMaximumnode(0,nums.length-1)

};