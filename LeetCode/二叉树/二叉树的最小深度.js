/*
 * @Author: cyong
 * @Date: 2021-12-16 10:43:20
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-16 11:15:00
 * @FilePath: \LeetCode\二叉树\二叉树的最小深度.js
 * @Description: 给定一个二叉树，找出其最小深度。
 */

/**
 * @author: cyong
 * @description: 
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    else{
        let leftdepth = minDepth(root.left)
        let rightdepth = minDepth(root.right)
        if(leftdepth === 0 || rightdepth ===0){
            return leftdepth>rightdepth?leftdepth+1:rightdepth+1
        }
        else{
             return leftdepth<rightdepth?leftdepth+1:rightdepth+1
        }
    }
};