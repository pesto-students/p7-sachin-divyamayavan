"use strict"

function createStack() {
    const items = [];
    return {
        push(item) {
            this.push(item);
            console.log(item + " is pushed successfully");
        },
        pop() {
            return items.pop()
        },
    };
}
const stack = createStack();

stack.push(10);
stack.push(5);
console.log(stack.items);

console.log("poped elements ->" + stack.pop());
