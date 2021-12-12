/*
 * @Author: cyong
 * @Date: 2021-12-12 10:45:24
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-12 13:48:45
 * @FilePath: \LeetCode\二叉树\对称二叉树.js
 * @Description: 给定一个二叉树，检查它是否是镜像对称的。
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
 * @description: 镜像对称本质上就是中序遍历，自己写的版本也太拉了，根本就没有写出来，这种思路有问题
 * @param {*} root
 * @return {*}
 */
 var isSymmetric = function(root) {
    let list = []
    let midtravers = function(root){
        if(!root){
             list.push(null)
             return 
        } else{
            if(!root.left && !root.right){
                 list.push(root.val)
                 return
            } else{
                midtravers(root.left)
                list.push(root.val)
                midtravers(root.right)
            }
        }

    }
    midtravers(root)
    let i = 0;
    let j = list.length-1
    if(root && root.left && root.right  &&  root.left.val !== root.right.val) return false
    while(i<=j){
        if(list[i++] === list[j--]);
        else{
            return false
        }
    }
    return true
};

 /**
  * @author: cyong
  * @description: 官方版本，使用递归的思路
  * @param {*} root
  * @return {boolean}
  */
 var isSymmetric = function(root) {
    let issame = function(node1,node2){
        if(!node1 && !node2) return true
        else if(node1 && node2){
            return node1.val === node2.val && issame(node1.left,node2.right) && issame(node1.right,node2.left)
        }
        else{
            return false
        }
    }
    return issame(root,root)
};

