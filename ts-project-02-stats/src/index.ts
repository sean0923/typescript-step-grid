import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinAnalysis } from './WinAnalysis';

const csvFileReader = new CsvFileReader('./football.csv');
const matchReader = new MatchReader(csvFileReader);

const winAnalysis = new WinAnalysis('Man United');

matchReader.load();

const res = winAnalysis.run(matchReader.matches);
console.log('res: ', res);
