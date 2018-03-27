const fs = require('fs-extra');
const { paths } = require('../config.json');

async function createPath(pathName) {
  const { src, components } = paths;
  const pathname = `${src}/${components}/${pathName}`;
  try {
    await fs.ensureDir(pathname);
    return Promise.resolve(pathname);
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = createPath
