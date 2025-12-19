import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import yaml from 'js-yaml';

const readFile = (filepath) => {
  // Получаем абсолютный путь (работает с относительными путями)
  const absolutePath = resolve(process.cwd(), filepath);
  
  // Читаем содержимое файла
  const content = readFileSync(absolutePath, 'utf-8');
  
  // Определяем формат по расширению
  const extension = extname(filepath).toLowerCase();
  
  // Парсим в зависимости от формата
  if (extension === '.json') {
    return JSON.parse(content);
  }
  
  if (extension === '.yaml' || extension === '.yml') {
    return yaml.load(content);
  }
  
  throw new Error(`Unsupported file format: ${extension}. Supported: .json, .yaml, .yml`);
};

export default readFile;
