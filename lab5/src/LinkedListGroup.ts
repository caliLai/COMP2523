import {ISortable} from "./ISortable";

class Node {
  next: Node | null = null;
  data: number;
  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedListGroup implements ISortable {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    let counter = 0;
		let pointer = this.head;
		while(pointer != null){
			counter++;
			pointer = pointer.next;
		}
		return counter;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Error: Index out of bounds");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Error: Index out of bounds");
  }

  compare(leftPos: number, rightPos: number): boolean {
    return(this.at(leftPos).data > this.at(rightPos).data);
  }

  swap(leftPos: number, rightPos: number): void {
    let temp = this.at(leftPos).data;
		this.at(leftPos).data = this.at(rightPos).data;
		this.at(rightPos).data = temp;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

// let l = new LinkedListGroup();
// l.add(5);
// l.add(6);
// l.add(7);
// l.add(4);
// l.print();
// console.log("----");
// console.log(l.compare(0, 1));
// console.log(l.length);
// l.swap(1, 3);
// console.log("----");
// l.print();
