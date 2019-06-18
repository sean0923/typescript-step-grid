// interface Sortable {
//   swap(leftIdx: number, rightIdx: number): void;
//   isLeftBigger(leftIdx: number, rightIdx: number): boolean;
//   length: number;
// }

export abstract class Sorter {
  abstract isLeftBigger(leftIdx: number, rightIdx: number): boolean;
  abstract swap(leftIdx: number, rightIdx: number): void;
  abstract length: number;

  sort() {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j <= this.length - i - 2; j++) {
        if (this.isLeftBigger(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
