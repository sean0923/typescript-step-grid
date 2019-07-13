type Tuple = [string, string, string];

// const tuple: Tuple[] = [['a', 'b', 1]];

const items = [ 'a', 'b', 'c' ];

const tuples: Tuple[] = items.map((item: string): Tuple => {
	return [ item, item, item ];
});

const practice: Tuple[] = [ [ 'a', 'a', 'a' ], [ 'b', 'b', 'b' ], [ 'c', 'c', 'c' ] ];

console.log('tuples: ', tuples);
