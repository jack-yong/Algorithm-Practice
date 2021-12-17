/*
 * @Author: cyong
 * @Date: 2021-12-17 09:48:51
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-17 10:05:53
 * @FilePath: \LeetCode\二叉树\路径总和.js
 * @Description: 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 如果存在，返回 true ；否则，返回 false
 */


/**
 * @author: cyong
 * @description:自己写的题目解析，感觉不够简洁，但是核心思想都是对二叉树的遍历
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let depthvaladd = function(node,adder){
        if(!node) return targetSum === adder && adder!== 0
        else{
            if(node.left && node.right){
                return depthvaladd(node.left,adder+node.val) ||  depthvaladd(node.right,adder+node.val) 
            }
            else if(node.left){
                return depthvaladd(node.left,adder+node.val)
            }
            else if(node.right){
                return depthvaladd(node.right,adder+node.val) 
            }
            else{
                return  targetSum === adder+node.val
            }
        }
    }
    return depthvaladd(root,0)
};



/**
 * @author: cyong
 * @description: 
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

};
