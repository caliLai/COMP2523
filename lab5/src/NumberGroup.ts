import {ISortable} from "./ISortable";

export class NumberGroup implements ISortable{
  data: number[];

	constructor(data: number[]){
		this.data = data;
	}

	get length():number {
		return this.data.length;
	}

	swap(leftPos: number, rightPos: number):void { // logic
		let temp = this.data[leftPos];
		this.data[leftPos] = this.data[rightPos];
		this.data[rightPos] = temp;

	};

	// returns true if front number is greater
  compare(leftPos: number, rightPos: number): boolean {
		return(this.data[leftPos] > this.data[rightPos]);
	};
}

// let n = new NumberGroup([3, 2, 11]);
// console.log(n.compare(0, 2));
// console.log(n.compare(0, 1));
// n.swap(0, 2);
// console.log(n);
