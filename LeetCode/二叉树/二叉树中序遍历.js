/*
 * @Author: cyong
 * @Date: 2021-12-09 10:24:49
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-17 09:55:41
 * @FilePath: \LeetCode\二叉树\二叉树中序遍历.js
 * @Description: 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 */

/**
 * @author: cyong
 * @description: 例如输入:root = [1,null,2,3],输出：[1,3,2]
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let list = [] 
    function inorder(node) { 
        if(node){
            inorder(node.left)
            list.push(node.val)
            inorder(node.right)
        }
     }
    inorder(root)
    return list
};
