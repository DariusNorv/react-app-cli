const makePromt = require('./makePromt');
const writeFile = require('./writeFile');

module.exports = makePromt
  .then(writeFile)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
