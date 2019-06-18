import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

const numCollect = new NumberCollection([2, 1, 7, 10, 4]);
numCollect.sort();
console.log('numCollect: ', numCollect);

const charCollet = new CharactersCollection('FaEDzSbc');
charCollet.sort();
console.log('charCollet: ', charCollet);

const ll = new LinkedList();
ll.add(100);
ll.add(2);
ll.add(3);
ll.add(1);

ll.sort();

ll.print();
