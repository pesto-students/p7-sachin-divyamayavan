class Queue {

    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enQueue(x) {

        while (this.s1.length != 0) {
            this.s2.push(this.s1.pop());
        }

        this.s1.push(x);

        while (this.s2.length != 0) {
            this.s1.push(this.s2.pop());
        }
    }

    deQueue() {

        if (this.s1.length == 0) {
            console.log("Q is Empty");
        }

        let x = this.s1[this.s1.length - 1];
        this.s1.pop();
        return x;
    }
}

let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
