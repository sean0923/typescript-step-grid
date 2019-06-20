import { Analzer } from './Summary';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';

export class WinAnalysis implements Analzer {
  constructor(public teamName: string) {}

  run(matches: MatchData): string {
    let win = 0;
    for (let parsedMatch of matches) {
      if (parsedMatch[1] === 'Man United' && parsedMatch[5] === MatchResult.HomeWin) {
        win++;
      }

      if (parsedMatch[2] === 'Man United' && parsedMatch[5] === MatchResult.AwayWin) {
        win++;
      }
    }

    return `${this.teamName} win ${win}`;
  }
}
