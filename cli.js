#!/usr/bin/env node

'use strict';

const program = require('commander');
const chalk = require('chalk');
const search = require('.');
const pkg = require('./package.json');

program
  .version(pkg.version, '-v, --version')
  .usage('[names])')
  .on('--help', () => {
    console.log('\n  Examples:\n');
    console.log(`    ${chalk.green('$')} unn react,react-dom,react-router`);
    console.log('');
  })
  .parse(process.argv);

const pkgs = program.args;

if (pkgs.length > 0) {
  search(pkgs);
} else {
  program.outputHelp();
}
