const { outputFile, readFile } = require('fs-extra');

async function createSingleFile({ name, content }) {
  try {
    await outputFile(name, content);
    await readFile(name, 'utf8');
    return Promise.resolve(name)
  } catch (err) {
    return Promise.reject(false);
  }
}

module.exports = createSingleFile;
