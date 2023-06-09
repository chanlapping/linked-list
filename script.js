class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.firstNode = null;
        this.sz = 0;
    }

    append(value) {
        const newNode = new Node(value);
        
        if (!this.firstNode) {
            this.firstNode = newNode;
            this.sz++;
            return;
        }
        
        this.tail().nextNode = newNode;
        this.sz++;
    }

    prepend(value) {
        const newNode = new Node(value, this.firstNode);
        this.firstNode = newNode;
        this.sz++;
    }

    size() {
        return this.sz;
    }

    head() {
        return this.firstNode;
    }

    tail() {
        return this.at(this.sz - 1);
    }

    at(index) {
        if (!Number.isInteger(index) || index >= this.sz || index < 0) {
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
        const newTail = this.at(this.sz - 2);
        const oldTail = newTail.nextNode;
        newTail.nextNode = null;
        this.sz--;
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

    find(value) {
        let index = 0;
        let currentNode = this.firstNode;
        while (currentNode) {
            if (currentNode.value == value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
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

    insertAt(value, index) {
        if (!Number.isInteger(index) || index >= this.sz || index < 0) {
            return null;
        }
        const prevNode = this.at(index - 1);
        const nextNode = this.at(index);
        const newNode = new Node(value, nextNode);
        prevNode.nextNode = newNode;
        this.sz++;
    }

    removeAt(index) {
        if (!Number.isInteger(index) || index >= this.sz || index < 0) {
            return null;
        }
        this.at(index - 1).nextNode = this.at(index + 1);
        this.sz--;
    }
}

const list = new LinkedList();
list.append(13);
list.append(14);
list.append(15);
list.prepend(12);
list.prepend(11); 
console.log(list.toString()); // 11, 12, 13, 14, 15
list.pop();
console.log(list.toString()); // 11, 12, 13, 14
list.insertAt(20, 3);
console.log(list.toString()); // 11, 12, 13, 20, 14
list.removeAt(1);
console.log(list.size()); // 4
console.log(list.toString()); // 11, 13, 20, 14
console.log(list.at(2)); // 20