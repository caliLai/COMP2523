export interface ISortable {
	length: number;
	compare(left: number, right: number): boolean;
	swap(left: number, right: number):void;
}
