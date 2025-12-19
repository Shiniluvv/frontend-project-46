import readFile from './readFile.js';
import compare from './compare.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  
  return compare(data1, data2);
};

export default genDiff;
