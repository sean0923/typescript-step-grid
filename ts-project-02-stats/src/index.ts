import fs from 'fs';

const rawMatches = fs.readFileSync('./football.csv', { encoding: 'utf-8' });
const parsedMatches = rawMatches.split('\n').map((str: string): string[] => str.split(','));

let manWin = 0;

for (let parsedMatch of parsedMatches) {
  if (parsedMatch[1] === 'Man United' && parsedMatch[5] === 'H') {
    manWin++;
  }

  if (parsedMatch[2] === 'Man United' && parsedMatch[5] === 'A') {
    manWin++;
  }
}

console.log(`Man United win ${manWin}`);
