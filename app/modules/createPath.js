const fs = require('fs-extra');

async function createPath(pathName) {
  const pathname = `${pathName}`;
  try {
    await fs.ensureDir(pathname);
    return Promise.resolve(pathname);
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = createPath
