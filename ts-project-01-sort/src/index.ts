import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';

const numCollect = new NumberCollection([2, 1, 7, 10, 4]);
const sorter = new Sorter(numCollect);

const str = 'FaEDzSbc';

const charCollet = new CharactersCollection(str);

sorter.sort();

console.log('numCollect: ', numCollect.data);

const charSorter = new Sorter(charCollet);

charSorter.sort();
console.log('charCollet: ', charCollet);
