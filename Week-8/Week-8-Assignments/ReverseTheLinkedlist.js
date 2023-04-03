var head;
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

function Reverse(node) {
    var previous = null;
    var current = node;
    var next = null;

    while (current != null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    node = previous;
    return node;
}

function printList(node) {
    while (node != null) {
        console.log(node.data + " ");
        node = node.next;
    }
}


head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

head = Reverse(head);
printList(head);