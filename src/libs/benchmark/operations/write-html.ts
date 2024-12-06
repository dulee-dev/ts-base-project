import { template } from 'radashi';
import { Report } from '../type.js';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const htmlResourcePath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '/resources',
  'index.html',
);

export const writeHtml = (dist: string, data: Report[]) => {
  const html = readFileSync(htmlResourcePath, 'utf-8');
  const outputHtml = template(html, {
    data: JSON.stringify(data, undefined, '  '),
  });
  writeFileSync(dist, outputHtml);
};
