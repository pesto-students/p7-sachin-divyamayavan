var head;

class Node {
    constructor(value) {
        this.data = value;
        this.next = null
    }
}

function push(new_data) {
    var new_node = new Node(new_node);
    new_node.next = head;
    head = new_node;
}

function detectLoop(h) {
    var s = new Set();
    while (h != null) {
        if (s.has(h))
            return true;

        s.add(h);
        h = h.next;
    }
    return false;
}

push(20);
push(4);
push(15);
push(10);

head.next.next.next.next = head;

if (detectLoop(head))
    console.log("True");
else
    console.log("False");