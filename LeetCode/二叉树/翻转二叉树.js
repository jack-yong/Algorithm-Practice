/*
 * @Author: cyong
 * @Date: 2021-12-18 18:47:29
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-18 19:24:38
 * @FilePath: \LeetCode\二叉树\翻转二叉树.js
 * @Description: 翻转一棵二叉树。
 */



/**
 * @author: cyong
 * @description: 本质上还是一个前序遍历
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    let invernode = function(node){
        if(!node) return 
        let p = node.left
        node.left = node.right
        node.right = p
        invernode( node.left)
        invernode( node.right)
    }
    invernode(root)
    return root
    
};