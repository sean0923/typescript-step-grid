import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

let manWin = 0;

const csvFileReader = new CsvFileReader('./football.csv');
const matchReader = new MatchReader(csvFileReader);

// const date = csvFileReader.data[0][0];

matchReader.load();
for (let parsedMatch of matchReader.matches) {
  if (parsedMatch[1] === 'Man United' && parsedMatch[5] === MatchResult.HomeWin) {
    manWin++;
  }

  if (parsedMatch[2] === 'Man United' && parsedMatch[5] === MatchResult.AwayWin) {
    manWin++;
  }
}

console.log(`Man United win ${manWin}`);
