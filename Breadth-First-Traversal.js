/*
1. Put the starting node in a queue.
2. While the queue is not empty, repeat steps 3-4.
3. Dequeue a node and print it.
4. Put all of the node's children in the back of the queue.
*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function breadthFirstSearchTree(root) {
    let queue = [root];
    while (queue.length > 0) {
        let currentNode = queue.shift();
        console.log(currentNode.value);
        currentNode.children.forEach(child => {
            queue.push(child);
        });
    }
}


class GraphNode {
    constructor() {
        this.nodes = {};
    }

    addNode(value) {
        this.nodes[value] = [];
    }

    addNodeEdge(node1, node2) {
        this.nodes[node1].push(node2);
        this.nodes[node2].push(node1);
    }
}

function breadthFirstSearchGraph(graph, startNode) {
    let visited = {};
    let queue = [startNode];
    visited[startNode] = true;

    while (queue.length > 0) {
        let currentNode = queue.shift();
        console.log(currentNode);
        graph.nodes[currentNode].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
}


