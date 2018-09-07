const axios = require('axios');
const chalk = require('chalk');

function search(pkgs = []) {
  if (!Array.isArray(pkgs)) {
    throw 'Param should be an array.';
  }

  pkgs.forEach((pkg) => {
    axios.get(`https://registry.npmjs.org/${pkg}`)
      .then((res) => {
        console.log(`${chalk.cyan(pkg)}: ${chalk.red('Used!')}`);
      })
      .catch((err) => {
        console.log(`${chalk.cyan(pkg)}: ${chalk.green('Unused!')}`);
      });
  });
}

module.exports = search;
