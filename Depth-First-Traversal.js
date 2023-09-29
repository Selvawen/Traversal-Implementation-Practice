/*
Put the starting node on a stack.
While the stack is not empty, repeat steps 3-4.
Pop a node and print it.
Put all of the node's children on the top of the stack.
*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function depthFirstSearchTree(node) {
    console.log(node.value); 
    
    for (let child of node.children) {
        depthFirstSearchTree(child); 
    }
}

class GraphNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function depthFirstSearchGraph(node, visited) {
    if (!visited.has(node)) {
        console.log(node.value); 
        visited.add(node);
        
        for (let child of node.children) {
            depthFirstSearchGraph(child, visited); 
        }
    }
}



