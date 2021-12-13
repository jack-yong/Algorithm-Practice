/*
 * @Author: cyong
 * @Date: 2021-12-13 10:32:16
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-13 10:33:56
 * @FilePath: \LeetCode\二叉树\二叉树的最大深度.js
 * @Description: 给定一个二叉树，找出其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 */


/**
 * @author: cyong
 * @description: 使用的是深度优先遍历，但是时间复杂度很大，js中尽量定义变量来接受递归的参数，否则执行效率很低
 * @param {*} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    else{
        let leftdepth = maxDepth(root.left)
        let rightdepth = maxDepth(root.right)
        return leftdepth > rightdepth?leftdepth+1 : rightdepth+1
    }

};
