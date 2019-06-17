import { NumberCollection } from './NumberCollection';

export class Sorter {
  collection: NumberCollection;

  constructor(collection: NumberCollection) {
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
