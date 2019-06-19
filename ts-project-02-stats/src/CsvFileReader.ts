import fs from 'fs';

import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  fileName: string;
  data: MatchData[] = [];

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  read(): void {
    const rawMatches = fs.readFileSync(this.fileName, { encoding: 'utf-8' });
    this.data = rawMatches
      .split('\n')
      .map((str: string): string[] => str.split(','))
      .map((row) => {
        return [
          new Date(),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      });
  }
}
