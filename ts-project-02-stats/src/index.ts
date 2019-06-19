import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

let manWin = 0;

const csvFileReader = new CsvFileReader('./football.csv');
csvFileReader.read();

for (let parsedMatch of csvFileReader.data) {
  if (parsedMatch[1] === 'Man United' && parsedMatch[5] === MatchResult.HomeWin) {
    manWin++;
  }

  if (parsedMatch[2] === 'Man United' && parsedMatch[5] === MatchResult.AwayWin) {
    manWin++;
  }
}

console.log(`Man United win ${manWin}`);
