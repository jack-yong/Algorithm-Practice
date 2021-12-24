/*
 * @Author: cyong
 * @Date: 2021-12-24 15:51:35
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-24 16:02:51
 * @FilePath: \LeetCode\二叉树\二叉树的直径.js
 * @Description: 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 */


/**
 * @author: cyong
 * @description: 通过遍历整颗二叉树，在左右子树中找到最深的子树深度，并且更新最长直径，即左子树最大深度加上右子树最大深度。
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0 
    let diameterOfnode = function(node){
        if(!node) return 0
        let leftDiameter = diameterOfnode(node.left)
        let rightDiameter = diameterOfnode(node.right)
        maxDiameter = maxDiameter > leftDiameter+rightDiameter?maxDiameter:leftDiameter+rightDiameter
        return leftDiameter > rightDiameter?leftDiameter+1:rightDiameter+1
    }
    diameterOfnode(root)
    return maxDiameter
};