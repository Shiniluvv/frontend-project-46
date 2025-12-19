import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value) && !Array.isArray(value) && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'boolean') {
    return value;
  }
  return value;
};

const stylish = (diff) => {
  const lines = diff.map((item) => {
    switch (item.type) {
      case 'added':
        return `    + ${item.key}: ${formatValue(item.value)}`;
      case 'removed':
        return `    - ${item.key}: ${formatValue(item.value)}`;
      case 'unchanged':
        return `      ${item.key}: ${formatValue(item.value)}`;
      case 'changed':
        return [
          `    - ${item.key}: ${formatValue(item.oldValue)}`,
          `    + ${item.key}: ${formatValue(item.newValue)}`,
        ].join('\n');
      default:
        throw new Error(`Unknown type: ${item.type}`);
    }
  });
  return `{\n${lines.join('\n')}\n}`;
};

export default stylish;
