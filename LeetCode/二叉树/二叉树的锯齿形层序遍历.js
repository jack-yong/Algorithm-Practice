/*
 * @Author: cyong
 * @Date: 2021-12-22 20:07:46
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-22 21:30:57
 * @FilePath: \LeetCode\二叉树\二叉树的锯齿形层序遍历.js
 * @Description: 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 */


/**
 * @author: cyong
 * @description: 自己写的题解，但是感觉好复杂啊，没有官方题解简单，时间复杂度和空间复杂度都不如官方题解
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let resultarr= []
    let rowNode = []
    let rowConut = 0
    rowNode.push(root)
    while(rowNode.length > 0){
        let rowNum = []
        let rownextNode = []
        while(rowNode.length > 0){
            let tempNode
            tempNode = rowNode.pop()
            rowNum.push(tempNode.val)
            if(rowConut % 2 ===0){
                if(tempNode.left){
                    rownextNode.push(tempNode.left) 
                }
                if(tempNode.right){
                    rownextNode.push(tempNode.right) 
                }
            }
            else{
                if(tempNode.right){
                    rownextNode.push(tempNode.right) 
                }
                if(tempNode.left){
                    rownextNode.push(tempNode.left) 
                }
            }
        }
        rowConut++
        rowNode = rownextNode
        resultarr.push(rowNum)
    }
    return resultarr

};


/**
 * @author: cyong
 * @description: 官方题解
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }

    const ans = [];
    const nodeQueue = [root];

    let isOrderLeft = true;

    while (nodeQueue.length) {
        let levelList = [];
        const size = nodeQueue.length;
        for (let i = 0; i < size; ++i) {
            const node = nodeQueue.shift();
            if (isOrderLeft) {
                levelList.push(node.val);
            } else {
                levelList.unshift(node.val);
            }
            if (node.left !== null) {
                nodeQueue.push(node.left);
            }
            if (node.right !== null) {
                nodeQueue.push(node.right);
            }
        }            
        ans.push(levelList);
        isOrderLeft = !isOrderLeft;
    }

    return ans;
};
