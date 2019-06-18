import { Sorter } from './Sorter';

export class NumberCollection extends Sorter {
  data: number[];
  length: number;

  constructor(data: number[]) {
    super();
    this.data = data;
    this.length = data.length;
  }

  isLeftBigger(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx] > this.data[rightIdx];
  }

  swap(leftIdx: number, rightIdx: number): void {
    const leftNum = this.data[leftIdx];
    this.data[leftIdx] = this.data[rightIdx];
    this.data[rightIdx] = leftNum;
  }
}
