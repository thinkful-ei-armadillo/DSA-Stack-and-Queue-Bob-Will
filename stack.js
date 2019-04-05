'use strict';

// create a node containing the data and a reference to next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // method that puts data at the top of the stack
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  // remove data from the top of the stack
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

// allows you to look at the top of stack without removing
function peek(starTrek) {
  if (starTrek.top === null) {
    return null;
  }
  return starTrek.top.data;
}

// check if stack is empty
function isEmpty(starTrek) {
  if (starTrek.top === null) {
    return true;
  }
  return false;
}

// display everything in stack
function display(starTrek) {
  let node = starTrek.top;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

let starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
starTrek.pop();
starTrek.pop();
// console.log(display(starTrek));


// 3. Check for palindromes using a stack

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  let newStack = new Stack();

  for (let i = 0; i < s.length; i++) {
    newStack.push(s[1]);
  }
  let newString = '';
  for (let i = 0; i < s.length; i++) {
    newString += newStack.pop();
  }
  return newString === s;
}

// True, true, true, false
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));


// 4. Matching parentheses in an expression

function balanced(s) {

  let stack = new Stack();

  let index = 0;
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    // check if we should close quotes
    if (current === `'`) {
      if (peek(stack) === `'`) {
        stack.pop();
      } else {
        stack.push(`'`);
      }
    }
    if (current === `"`) {
      if (peek(stack) ===`"`) {
        stack.pop();
      } else {
        stack.push(`"`);
      }
    }
    //if we are inside quotes, wild west rules
    if(!(peek(stack) === `'` || peek(stack) === `"`)) {
      //otherwise check if brackets are in legal places
      if (current === '(' || current === '[' || current === '{') {
        stack.push(current);
      }
      else if (
        (current === ')' && peek(stack) === '(' ) || 
        (current === ']' && peek(stack) === '[' ) || 
        (current === '}' && peek(stack) === '{' ) ){
        stack.pop();
      }
      else if (current === ')' || current === ']' || current === '}') {
        return `expecting a closing ${peek(stack)} but found ${current}`;
      }}

    index++;
  }
  if (!isEmpty(stack)) {
    return `${peek(stack)} has no buddy`;
  }
  return 'you know how things work!';
}

// let someString = `'][])({}}' "`;
// console.log(balanced(someString));


// 5. Sort stack

function sort(stack) {
  let tempStack = new Stack();
  let tempValue;

  while(!isEmpty(stack)) {
    tempValue = stack.pop();

    while(peek(tempStack) > tempValue && tempStack.top !== null) {
      stack.push(tempStack.pop());
    }
    tempStack.push(tempValue);
  }

  while(!isEmpty(tempStack)) {
    stack.push(tempStack.pop());
  }
  return stack;
}

class StackQueue {
  constructor() {
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  }

  enqueue(data) {
    if (isEmpty(this.inputStack)) {
      this.inputStack.push(data);
    }
    else {
      this.outputStack.push(data);
    }
  }

  dequeue() {
    if(isEmpty(this.inputStack)) {
      return null;
    }
    let result = this.inputStack.pop();
    if (isEmpty(this.inputStack)) {
      while(!isEmpty(this.outputStack)) {
        this.inputStack.push(this.outputStack.pop());
      }
    }
    return result;
  }

}

let queue = new StackQueue();
queue.enqueue('test');
queue.enqueue('testing again');
queue.enqueue('testing again again');
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue('test');
queue.enqueue('testing again');
console.log(queue);