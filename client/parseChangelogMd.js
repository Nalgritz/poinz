const path = require('path');
const fs = require('fs');

const parseChangelogMdItem = require('./parseChangelogMdItem');

module.exports = parseChangelogMd;

/**
 * Reads our CHANGELOG.md (on repo root level) and parses it.
 * This is used during the webpack build. The array of changelog "items" is made available to the React app via DefinePlugin...
 * The React app can render it (on the landing page, in the help menu)
 *
 * @returns {{date: string, changes: string[], version: string}[]}
 */
function parseChangelogMd() {
  let markdownInput = fs.readFileSync(path.resolve(__dirname, '../CHANGELOG.md'), 'utf-8').trim();
  const itemsPlain = markdownInput.split('###').filter((i) => !!i);
  return itemsPlain.map(parseChangelogMdItem);
}

parseChangelogMd();
