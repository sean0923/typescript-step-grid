import fs from 'fs';

import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
	print(report: string) {
		const html = `
      <div>
        <div>Analysis Output</div>
        <div>${report}</div>
      </div>
    `;

		fs.writeFileSync('report.html', html);
	}
}
