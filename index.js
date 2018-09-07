const axios = require('axios');
const chalk = require('chalk');

function search(pkgs = []) {
  if (!Array.isArray(pkgs)) {
    throw 'Param should be an array.';
  }

  console.log();
  pkgs.forEach((pkg) => {
    axios.get(`https://registry.npmjs.org/${pkg}`)
      .then((res) => {
        console.log(`${chalk.cyan(pkg)}: ${chalk.red('Used ❌')}`);
      })
      .catch((err) => {
        if (err.stack && /Request failed with status code 404/.test(err.stack)) {
          console.log(`${chalk.cyan(pkg)}: ${chalk.green('Unused ✅')}`);
        } else {
          console.log(`${chalk.cyan(pkg)}: ${chalk.gray('Unknown 🤔')}`)
        }
      });
  });
}

module.exports = search;
