const fs = require('fs-extra');

async function createSingleFile({ name, content }) {
  try {
    await fs.outputFile(name, content);
    await fs.readFile(name, 'utf8');
    return Promise.resolve(name)
  } catch (err) {
    return Promise.reject(false);
  }
}

module.exports = createSingleFile;
