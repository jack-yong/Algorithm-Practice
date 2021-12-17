/*
 * @Author: cyong
 * @Date: 2021-12-17 10:20:40
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-17 10:41:53
 * @FilePath: \LeetCode\二叉树\二叉树的前序遍历.js
 * @Description: 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 */



/**
 * @author: cyong
 * @description: 前序遍历
 * @param {*} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let num = []
    let pretraver = function(node){
        if(node){
            num.push(node.val)
            pretraver(node.left)
            pretraver(node.right)
        }
    }
    pretraver(root)
    return num
};