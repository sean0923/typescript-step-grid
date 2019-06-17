import { NumberCollection } from './NumberCollection';
import { Sorter } from './Sorter';

const numCollect = new NumberCollection([2, 1, 7, 10, 4]);
const sorter = new Sorter(numCollect);

sorter.sort();

console.log('numCollect: ', numCollect.data);
