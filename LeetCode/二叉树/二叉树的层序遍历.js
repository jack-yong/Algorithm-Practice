/*
 * @Author: cyong
 * @Date: 2021-12-21 10:39:43
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-21 10:44:48
 * @FilePath: \LeetCode\二叉树\二叉树的层序遍历.js
 * @Description: 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 */

/**
 * @author: cyong
 * @description: 遍历的思路就是通过借助队列这一数据结构，通过将树节点逐层放置到队列中并且进行弹出，然后进行遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let arrNode = []
    let nowRowcount = 1
    let nextRowcont  = 0
    let arrResult = []
    if(!root) return arrResult
    arrNode.push(root)
    while(arrNode.length > 0){
        let arrrow = []
        while(nowRowcount > 0){
            let tempnode = arrNode.shift()
            arrrow.push(tempnode.val)
            nowRowcount--
            if(tempnode.left){
                arrNode.push(tempnode.left)
                nextRowcont++
            }
            if(tempnode.right){
                arrNode.push(tempnode.right)
                nextRowcont++
            }
        }
        nowRowcount = nextRowcont
        nextRowcont = 0
        arrResult.push(arrrow)
    }
    return arrResult
};
