const fs = require('fs-extra');

async function updateUtilIndex(path, name) {
  const filename = `${path}/index.js`;
  try {
    await fs.ensureFile(filename);
    let data = await await fs.readFile(filename, 'utf8');
    data += `export { default as ${name} } from './${name}';\n`;
    await fs.outputFile(filename, data);
    return Promise.resolve({path, message: 'Succesfully added to index'});
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = updateUtilIndex;
