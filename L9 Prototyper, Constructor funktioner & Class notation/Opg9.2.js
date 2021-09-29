// opgave 9.2 - Lav en class StringStack med tilhørende push() og pop()metoder
class StringStack {
    constructor() {
      this.size = -1;
      this.stackArr = [];
    }
    peek() { return this.stackArr[this.size] }

    push(e) {
        this.size++;
        this.stackArr[this.size] = e;    
    }

    pop() {
        if (this.size > -1) {
            this.stackArr[this.size] = null;
            this.size--;
        } 
    }

    isEmpty() { return this.size === -1 }

    clear() {
        while(!this.isEmpty()) this.pop();
    }

    contains(e) {
        for (let i = this.size; i >= -1; i--) {
            if (e === this.stackArr[i]) {
                return true;
            }
        }
        return false;
    }

    search(e) { return this.stackArr.indexOf(e) }

    getStack() { return this.stackArr }
    
    getSize() { return this.size + 1 }
}

let stack = new StringStack();
stack.push("Hello");
stack.push("World");

console.log(stack.getStack());
stack.pop();
stack.pop();
console.log(stack.getStack());
console.log(stack.getSize());
stack.push("World");
stack.push("World");
console.log(stack.getStack());
console.log(stack.getSize());
console.log(stack.isEmpty())
stack.clear();
console.log(stack.isEmpty())
console.log(stack.getSize());
stack.push("Hello");
stack.push("Friend");
stack.push("Good");
console.log(stack.getStack());
console.log(stack.getSize());
console.log(stack.contains("Hello"));
console.log(stack.search("Good"))