// opgave 9.2 - Lav en class StringStack med tilhørende push() og pop()metoder
class StringStack {
    constructor() {
      this.size = -1;
      this.stackArr = [];
    }
    push(e) {
        this.size++;
        this.stackArr[this.size] = e;    
    }
    pop() {
        this.stackArr[this.size] = null;
        this.size--;
    }
    getStack() { return this.stackArr; }
    getSize() { return this.size + 1 }
}

let stack = new StringStack();
stack.push("Hello");
stack.push("World");

console.log(stack.getStack());
stack.pop();
console.log(stack.getStack());
console.log(stack.getSize());
