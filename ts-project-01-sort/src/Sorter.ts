interface Sortable {
  swap(leftIdx: number, rightIdx: number): void;
  isLeftBigger(leftIdx: number, rightIdx: number): boolean;
  length: number;
}

export class Sorter {
  collection: Sortable;

  constructor(collection: Sortable) {
    this.collection = collection;
  }

  sort() {
    for (let i = 0; i < this.collection.length - 1; i++) {
      for (let j = 0; j <= this.collection.length - i - 2; j++) {
        if (this.collection.isLeftBigger(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
