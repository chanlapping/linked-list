class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(firstNode = null) {
        this.firstNode = firstNode;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.firstNode) {
            this.firstNode = newNode;
            return;
        }
        let currentNode = this.firstNode;
        while(currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value, this.firstNode);
        this.firstNode = newNode;
    }
}

const list = new LinkedList();
list.append(13);
list.append(14);
list.append(15);
list.prepend(12);
console.log(list);