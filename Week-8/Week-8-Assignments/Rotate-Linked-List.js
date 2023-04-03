var head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function rotate(k) {
    if (k == 0)
        return;

    var current = head;

    var count = 1;
    while (count < k && current != null) {
        current = current.next;
        count++;
    }


    if (current == null)
        return;


    var kthNode = current;

    while (current.next != null)
        current = current.next;

    current.next = head;

    head = kthNode.next;

    kthNode.next = null;
}


function push(new_data) {
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}

function printList() {
    var temp = head;
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }

}

// create a list 1->2->3->4->5->6->7->8
for (i = 1; i <= 8; i++)
    push(i);

rotate(4);

printList();


