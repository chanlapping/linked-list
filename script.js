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
        
        this.tail().nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value, this.firstNode);
        this.firstNode = newNode;
    }

    size() {
        let result = 0;
        let currentNode = this.firstNode;
        while (currentNode) {
            result++;
            currentNode = currentNode.nextNode;
        }
        return result;
    }

    head() {
        return this.firstNode;
    }

    tail() {
        let currentNode = this.firstNode;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        if (index >= this.size()) {
            return null;
        }
        let i = 0;
        let currentNode = this.firstNode;
        while (i < index) {
            currentNode = currentNode.nextNode;
            i++;
        }
        return currentNode;
    }

    pop() {
        const newTail = this.at(this.size() - 2);
        const oldTail = newTail.nextNode;
        newTail.nextNode = null;
        return oldTail;
    }

    contains(value) {
        let currentNode = this.firstNode;
        while (currentNode) {
            if (currentNode.value == value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    toString() {
        let result = '';
        let currentNode = this.firstNode;
        while (currentNode) {
            result += `( ${currentNode.value} ) --> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }
}

const list = new LinkedList();
list.append(13);
list.append(14);
list.append(15);
list.prepend(12);
list.prepend(11);
console.log(list.toString());
console.log(list.contains(3));