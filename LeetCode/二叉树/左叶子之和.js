/*
 * @Author: cyong
 * @Date: 2021-12-23 17:19:22
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-23 17:20:45
 * @FilePath: \LeetCode\二叉树\左叶子之和.js
 * @Description: 计算给定二叉树的所有左叶子之和。
 */


/**
 * @author: cyong
 * @description: 通过遍历，判断左子树是否存在，且左子树是否为叶子节点，如果满足则累加节点值
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let adderNum = 0
    let isLeavesnode = function(node){
        return !node.left && !node.right
    }
    let traverLeftLeaves = function(root){
        if(!root) return 
        if(root.left ){
            if(isLeavesnode(root.left)){
                adderNum +=root.left.val
            }
            else{
                traverLeftLeaves(root.left)
            }
        }
        if(root.right && !isLeavesnode(root.right)){
            traverLeftLeaves(root.right)
        }
    }
    traverLeftLeaves(root)
    return adderNum
};