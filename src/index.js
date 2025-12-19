import readFile from './readFile.js';
import compare from './compare.js';
import formatDiff from './formatters/stylish.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const diff = compare(data1, data2);
  return formatDiff(diff);
};

export default genDiff;
