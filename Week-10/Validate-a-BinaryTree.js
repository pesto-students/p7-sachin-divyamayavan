class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function newNode(data){
    let node = new Node (data);
    return node;
}

function MaxValue(node){
    if(node == null) return Number.MIN_VALUE;
     
    let value = node.data;
    let leftMax = MaxValue(node.left);
    let rightMax = MaxValue(node.right);
     
    return Math.max(value, Math.max(leftMax, rightMax));
}

function MinValue(node){
    if(node==null) return Number.MAX_VALUE;
    let value = node.data;
    let leftMax = MinValue(node.left);
    let rightMax = MinValue(node.right);
    return Math.min(value,Math.min(leftMax,rightMax));
}

function isBinaryTree(node){
    if(node==null) return 1;

    if(node.left != null && MaxValue(node.left) > node.data)
    return 0;
 
if(node.right != null && MinValue(node.right) < node.data)
    return 0;
 
if(!isBinaryTree(node.left) || !isBinaryTree(node.right))
    return 0;

    return 1;
}

let root = newNode(4);
root.left = newNode(2);
root.right = newNode(5);

root.left.left = newNode(1);
root.left.right = newNode(3);

if(isBinaryTree(root))
console.log("True");
else
console.log("False");