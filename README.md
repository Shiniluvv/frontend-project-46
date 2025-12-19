### Hexlet tests and linter status:
[![Actions Status](https://github.com/Shiniluvv/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Shiniluvv/frontend-project-46/actions)

[![CI](https://github.com/Shiniluvv/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/Shiniluvv/frontend-project-46/actions/workflows/ci.yml)

# Gendiff – сравнение конфигурационных файлов

Утилита для сравнения двух конфигурационных файлов (JSON, YAML) и вывода разницы в виде наглядного diff.

## Установка

\`\`\`bash
npm install @hexlet/code
\`\`\`

## Использование

### Сравнение JSON файлов

\`\`\`bash
gendiff file1.json file2.json
\`\`\`

Вывод:
\`\`\`
{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50
    + timeout: 20
    + verbose: true
}
\`\`\`

### Сравнение YAML файлов

\`\`\`bash
gendiff file1.yaml file2.yaml
\`\`\`

Вывод (аналогичный):
\`\`\`
{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50
    + timeout: 20
    + verbose: true
}
\`\`\`

### Опции

- \`-h, --help\`: Вывод справки
- \`-V, --version\`: Вывод версии
- \`-f, --format <type>\`: Формат вывода (по умолчанию: stylish)

## Тестирование

\`\`\`bash
# Запуск тестов
npm test

# Запуск линтера
npm run lint
\`\`\`

## Структура проекта

- \`src/\` – исходный код
- \`src/parsers/\` – парсеры для разных форматов (JSON, YAML)
- \`src/formatters/\` – форматеры вывода
- \`__tests__/\` – тесты
