/*
 * @Author: cyong
 * @Date: 2021-12-24 16:28:29
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-24 16:33:00
 * @FilePath: \LeetCode\二叉树\二叉树中的最大路径和.js
 * @Description: 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。
 * 同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
 * 路径和 是路径中各节点值的总和。给你一个二叉树的根节点 root ，返回其 最大路径和。
 */

/**
 * @author: cyong
 * @description: 改题目和求二叉树中的最大直径使用的思想很类似，但是需要注意由于节点可能是负值，因此节点本身可能是左右子树加上本身节点的最大路径和
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxPath = -Infinity
    let maxPathnode = function(node){
        if(!node) return 0
        let leftPath = maxPathnode(node.left) 
        let rightPath = maxPathnode(node.right)
        if(leftPath < 0){
            leftPath = 0
        }
        if(rightPath < 0){
            rightPath = 0
        }
        maxPath = maxPath > leftPath + rightPath+node.val ? maxPath : leftPath + rightPath +node.val
        return leftPath>rightPath?leftPath+node.val:rightPath+node.val

    }
    maxPathnode(root)
    return maxPath

};
