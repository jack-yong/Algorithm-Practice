/*
 * @Author: cyong
 * @Date: 2021-12-18 19:50:59
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-18 19:54:58
 * @FilePath: \LeetCode\二叉树\二叉树的所有路径.js
 * @Description: 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 */


/**
 * @author: cyong
 * @description: 本质上还是对于二叉树的遍历
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let strarr = []
    let nodetraver = function(node,str){
        if(!node) return
        else{
            let newstr
            if(str!==""){
                newstr = str+"->"+node.val
            }
           else{
                newstr = ""+node.val
           }
            if(node.left && node.right){
                nodetraver(node.left,newstr)
                nodetraver(node.right,newstr)
            }
            else if(node.left){
                nodetraver(node.left,newstr)
            }
            else if(node.right){
                nodetraver(node.right,newstr)
            }
            else{
                strarr.push(newstr)
                return
            }

        }
    }
    nodetraver(root,"")
    return strarr

};


/**
 * @author: cyong
 * @description: 二叉树的官方题解
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];
    const construct_paths = (root, path) => {
        if (root) {
            path += root.val.toString();
            if (root.left === null && root.right === null) { // 当前节点是叶子节点
                paths.push(path); // 把路径加入到答案中
            } else {
                path += "->"; // 当前节点不是叶子节点，继续递归遍历
                construct_paths(root.left, path);
                construct_paths(root.right, path);
            }
        }
    }
    construct_paths(root, "");
    return paths;
};
