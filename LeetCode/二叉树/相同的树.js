/*
 * @Author: cyong
 * @Date: 2021-12-11 12:48:02
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-11 12:57:07
 * @FilePath: \LeetCode\二叉树\相同的树.js
 * @Description: 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 */



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @author: cyong
 * @description: 使用到了树的遍历模板。
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    let isequal = function(p1,p2){
        if( p1 && p2){
            if(p1.val === p2.val){
                return isequal(p1.left,p2.left) && isequal(p1.right,p2.right)
            }
            else{
                return false
            }
        }
        else if( !p1 && !p2){
            return true
        }
        else{
            return false
        }
    }
    return isequal(p,q)
};