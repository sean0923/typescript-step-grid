import { MatchData } from './MatchData';

export interface Analzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	constructor(public analyzer: Analzer, public outputTarget: OutputTarget) {}

	buildAndPrintReport(matches: MatchData[]): void {
		const output = this.analyzer.run(matches);
		this.outputTarget.print(output);
	}
}
