import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinAnalysis } from './WinAnalysis';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

const csvFileReader = new CsvFileReader('./football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());
const htmlSummary = new Summary(new WinAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
htmlSummary.buildAndPrintReport(matchReader.matches);
