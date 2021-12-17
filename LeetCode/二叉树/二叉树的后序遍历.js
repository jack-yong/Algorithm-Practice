/*
 * @Author: cyong
 * @Date: 2021-12-17 10:29:56
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-17 10:29:57
 * @FilePath: \LeetCode\二叉树\二叉树的后序遍历.js
 * @Description: 给定一个二叉树，返回它的 后序 遍历。
 */

/**
 * @author: cyong
 * @description: 主要是使用二叉树的遍历模板
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let num = []
    let posttraver = function(node){
        if(node){
            posttraver(node.left)
            posttraver(node.right)
            num.push(node.val)
        }
    }
    posttraver(root)
    return num
};
