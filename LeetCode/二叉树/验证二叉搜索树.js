/*
 * @Author: cyong
 * @Date: 2021-12-19 15:49:21
 * @LastEditors: cyong
 * @LastEditTime: 2021-12-19 17:05:09
 * @FilePath: \LeetCode\二叉树\验证二叉搜索树.js
 * @Description: 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 */

/**
 * @author: cyong
 * @description: 自己写的验证二叉搜索树的版本，核心思路就是遍历每个子树(包括根节点),判断子树是否是二叉搜索树。
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let isBiger = function(node,num){
        if(!node) return true
        else{
            return node.val > num && isBiger(node.left,num) && isBiger(node.right,num)
        }
    }
    let isSmaller = function(node,num){
        if(!node) return true
        else{
            return node.val < num && isSmaller(node.left,num) && isSmaller(node.right,num)
        }
    }

    let traverNode = function(node){
        if(!node) return true
        else{
            let res = isSmaller(node.left,node.val) && isBiger(node.right,node.val)
            if(res){
                 return traverNode(node.left) && traverNode(node.right) 
            }
            else{
                return res
            }
          
        }

    }
    return traverNode(root)

};


/**
 * @author: cyong
 * @description: 官方题解：根据二叉树中序遍历的结果是递增的这一基本原则，进行判断
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};



/**
 * @author: cyong
 * @description:官方题解： 基于方法一中提及的性质，
 * 我们可以进一步知道二叉搜索树「中序遍历」得到的值构成的序列一定是升序的，
 * 这启示我们在中序遍历的时候实时检查当前节点的值是否大于前一个中序遍历到的节点的值即可。
 * @param {TreeNode} root
 * @return {boolean}
 */
const helper = (root, lower, upper) => {
    if (root === null) {
        return true;
    }
    if (root.val <= lower || root.val >= upper) {
        return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function(root) {
    //Infinity表示无穷的意思
    return helper(root, -Infinity, Infinity);
};
