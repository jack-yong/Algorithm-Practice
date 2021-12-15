/*
 * @Author: cyong
 * @Date: 2021-12-15 09:17:23
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-15 10:17:42
 * @FilePath: \LeetCode\二叉树\平衡二叉树.js
 * @Description: 给定一个二叉树，判断它是否是高度平衡的二叉树。
 */

/**
 * @author: cyong
 * @description: 主要还是使用到二叉树遍历的模板，通过进行后序遍历确定每一颗子树是否是完全平衡二叉树，我使用的是自底向上的递归
 * 核心思想就是:如果一棵子树是平衡的，则返回其高度（高度一定是非负整数），否则返回 -1。如果存在一棵子树不平衡，则整个二叉树一定不平衡
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    let isright =true
    let depth = function(node){
        if(!node) return 0
        else{
            let leftdepth = depth(node.left)
            let rightdepth = depth(node.right)
            if(leftdepth -rightdepth >=-1 && leftdepth -rightdepth <=1){
                    return leftdepth > rightdepth?leftdepth+1:rightdepth+1
            }
            else{
                isright =false
                return leftdepth > rightdepth?leftdepth+1:rightdepth+1
            }
        
        }
    }
    depth(root)
    return isright
};



//和官方题解唯一的区别就是使用外部的变量isright
var isBalanced = function(root) {
    let depth = function(node){
        if(!node) return 0
        else{
            let leftdepth = depth(node.left)
            let rightdepth = depth(node.right)
            if(leftdepth -rightdepth <-1 || leftdepth -rightdepth >1 || leftdepth==-1 || rightdepth==-1){
                     return -1
            }
            else{
               return leftdepth > rightdepth?leftdepth+1:rightdepth+1
            }
        
        }
    }
    return depth(root) >=0
};