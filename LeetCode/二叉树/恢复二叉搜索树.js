/*
 * @Author: cyong
 * @Date: 2021-12-20 14:21:56
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-20 14:28:19
 * @FilePath: \LeetCode\二叉树\恢复二叉搜索树.js
 * @Description: 恢复二叉搜索树
 */



/**
 * @author: cyong
 * @description: 递归的方式来解决这个问题，但是理解的不是很好，在x,y节点的标记问题上没能理解的很全面
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let x = null,y=null,pre=null
    let swapNodeval = function(node1,node2){
        let tempnum = node1.val
        node1.val = node2.val
        node2.val = tempnum
    }
    let  isright = function(node){
        if(!node) return 
        isright(node.left)
        if(pre && pre.val > node.val ){
            if(!x) x = pre
            y = node
        }
        pre  = node
        isright(node.right)
    }
    isright(root)
    swapNodeval(x,y)
};