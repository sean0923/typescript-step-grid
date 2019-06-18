import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public str: string) {
    super();
  }

  get length(): number {
    return this.str.length;
  }

  isLeftBigger(leftIdx: number, rightIdx: number): boolean {
    return this.str.toLowerCase()[leftIdx] > this.str.toLowerCase()[rightIdx];
  }

  swap(leftIdx: number, rightIdx: number): void {
    const leftChar = this.str[leftIdx];
    const rightChar = this.str[rightIdx];

    // A + r + l + B
    const front = this.str.slice(0, leftIdx);
    const back = this.str.slice(rightIdx + 1);

    this.str = front + rightChar + leftChar + back;
  }
}
