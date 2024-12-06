import { runTest } from '../operations/run-test.js';
import { Case } from '../type.js';
import { writeHtml } from '../operations/write-html.js';
import {
  logReportComplete,
  logStart,
  logTestComplete,
  logTestStart,
  logWriteHtml,
  logWriteJson,
} from '../helpers/logging.js';
import { writeJson } from '../operations/write-json.js';
import { calcHtmlDist, calcJsonDist } from '../helpers/calc-dist.js';

export const report = (tag: string, cases: Case[]) => {
  try {
    logStart(tag);

    logTestStart();
    const data = runTest(cases);
    logTestComplete(data.length);

    const jsonDist = calcJsonDist(tag);

    writeJson(jsonDist, data);
    logWriteJson(jsonDist);

    const htmlDist = calcHtmlDist(tag);
    writeHtml(htmlDist, data);
    logWriteHtml(htmlDist);

    logReportComplete();
  } catch (err) {
    if (typeof err === 'object' && err !== null && 'code' in err) {
      if (err.code === 'ENOENT')
        console.error('check "output/" directory exist');
    }
    throw err;
  }
};
