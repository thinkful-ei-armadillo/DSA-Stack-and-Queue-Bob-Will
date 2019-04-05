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

let lineOfPeople = new Queue();
lineOfPeople.enqueue('F Jane');
lineOfPeople.enqueue('M Frank');
lineOfPeople.enqueue('M John');
lineOfPeople.enqueue('F Madonna');
lineOfPeople.enqueue('M David');
lineOfPeople.enqueue('M Christopher');
lineOfPeople.enqueue('M Sherlock');
lineOfPeople.enqueue('F Beyonce');

function squareDanceSort(line) {
  let spares = new Queue();
  while(line.first !== null) {
    if (isEmpty(spares)) {
      spares.enqueue(line.dequeue());
    }
    else {
      if (spares.first.value[0] !== line.first.value[0]) {
        console.log(`${spares.dequeue()} is paired with ${line.dequeue()}`)
      } 
      else {
        spares.enqueue(line.dequeue());
      }
    }
  }
  if (spares.first !== null) {
    let gender = spares.first.value[0];
    let length = 0;
    while(spares.first !== null) {
      length++;
      spares.first = spares.first.next;
    }
    console.log(`there are ${length} ${gender} dancers waiting to dance`)
  }
}

//squareDanceSort(lineOfPeople);

//expected output 
//Female dancer is Jane, and the male dancer is Frank
// Female dancer is Madonna, and the male dancer is John
// Female dancer is Beyonce, and the male dancer is Sherlock
// There are 2 male dancers waiting to dance

function ophidianLine(line) {
  while(line.first !== null) {
    console.log('next step');
    display(line);
    let current = line.dequeue();
    if (Math.floor(Math.random()*4) === 3) {
      line.enqueue(current);
    }
  }
}

ophidianLine(lineOfPeople);

