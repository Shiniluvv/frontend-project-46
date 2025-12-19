#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .version("1.0.0");

program.parse(process.argv);

// Вывод справки, если не переданы аргументы
if (!process.argv.slice(2).length) {
  program.help();
}
