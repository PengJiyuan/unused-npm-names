#!/usr/bin/env node

'use strict';

const path = require('path');
const program = require('commander');
const chalk = require('chalk');
const search = require('.');
const pkg = require('./package.json');

program
  .version(pkg.version, '-v, --version')
  .usage('[names])')
  .option('-c, --config [config]', 'use config files')
  .on('--help', () => {
    console.log('\n  Examples:\n');
    console.log(`    ${chalk.green('$')} unn react,react-dom,react-router`);
    console.log('');
  })
  .parse(process.argv);

const pkgs = program.args;

if (program.config && typeof program.config === 'string') {
  const files = path.resolve(process.cwd(), program.config);

  try {
    const pkgs = require(files);
    search(pkgs);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
} else {
  if (pkgs.length > 0) {
    search(pkgs);
  } else {
    program.outputHelp();
  }
}
