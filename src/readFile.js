import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import getParser from './parsers/index.js';

const readFile = (filepath) => {
  const absolutePath = resolve(process.cwd(), filepath);
  const content = readFileSync(absolutePath, 'utf-8');

  const extension = extname(filepath).toLowerCase().slice(1); // убираем точку: '.json' → 'json'
  const parse = getParser(extension);

  return parse(content);
};

export default readFile;
