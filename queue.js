'use strict';

class _Node {
  constructor(value) {
    this.value=value,
    this.next=null;
    this.prev=null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // create a node with the data you want to ADD to queue
    const node = new _Node(data);
    // if queue is empty, make the node the FIRST node in the queue
    if (this.first === null) {
      this.first = node;
    }
    // if there is something in the queue, then take the node that is at the end of the queue and link it to the new node
    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    // if queue is empty, there is nothing to remove
    if (this.first === null) {
      return;
    }

    // Make the first item in the queue to be the item that is the new first
    const node = this.first;
    this.first = this.first.next;

    // check if this is the last item
    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}



// 6. Create a queue class using Doubly linked List

class DoublyQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {

    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
      node.prev = this.last;
    }
    this.last = node;
  }

  dequeue() {
   
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(starTrekQ) {
  if (starTrekQ.first === null) {
    return null;
  }
  return starTrekQ.first.value;
}

function isEmpty(starTrekQ) {
  if (starTrekQ.first === null) {
    return true;
  }
  return false;
}

function display(starTrekQ) {
  let node = starTrekQ.first;
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
}

let starTrekQ = new DoublyQueue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

display(starTrekQ);

// Check to see who is first one on the Queue?
// Kirk


