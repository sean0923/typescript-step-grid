import fs from 'fs';

import { MatchResult } from './MatchResult';
import { convertStrToDate } from './utils';

export abstract class CsvFileReader<T> {
  fileName: string;
  data: T[] = [];

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  abstract mapRow(row: string[]): T;

  read(): void {
    const rawMatches = fs.readFileSync(this.fileName, { encoding: 'utf-8' });
    this.data = rawMatches
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
