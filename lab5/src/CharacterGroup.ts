import {ISortable} from "./ISortable";

export class CharacterGroup implements ISortable{
  data: string;

	constructor(data: string){
		this.data = data;
	}

  get length(): number {
		return this.data.length;
	};

  swap(leftPos: number, rightPos: number):void {
		let strArray = this.data.split("");
		let temp:string;

		temp = strArray[leftPos];
		strArray[leftPos] = strArray[rightPos];
		strArray[rightPos] = temp;

		this.data = strArray.join("");

	};

	// sort aphabetically, regardless of case
  compare(leftPos: number, rightPos: number): boolean { // logic
		return (this.data[leftPos].toUpperCase() > this.data[rightPos].toUpperCase());
	};
}

// let s = new CharacterGroup("aZmA");
// console.log(s.length);
// console.log(s.compare(1, 2));
// console.log(s.compare(0, 3));
// console.log(s.compare(0, 1));
// s.swap(0, 1);
// console.log(s);
