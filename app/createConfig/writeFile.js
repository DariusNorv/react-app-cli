const { createWriteStream } = require('fs-extra');
const { resolve } = require('path');
const defaults = require('../templates/.default-config.json');

module.exports = (answers) =>
  createWriteStream(resolve(`${process.cwd()}/.rcc-config.json`))
    .once('open', function () {
      delete answers.useDefault;
      return this.write(JSON.stringify({...answers, ...defaults }, null, '\t'));
    })
    .on('close', Promise.resolve)
    .on('error', Promise.reject);
