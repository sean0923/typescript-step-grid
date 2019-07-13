import fs from 'fs';

export class CsvFileReader {
	fileName: string;
	data: string[][] = [];

	constructor(fileName: string) {
		this.fileName = fileName;
	}

	read(): void {
		const rawMatches = fs.readFileSync(this.fileName, { encoding: 'utf-8' });
		this.data = rawMatches.split('\n').map((str: string): string[] => str.split(','));
	}
}
