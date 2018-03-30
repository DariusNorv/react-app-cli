const { ensureDir } = require('fs-extra');

async function createPath(pathName) {
  const pathname = `${pathName}`;
  try {
    await ensureDir(pathname);
    return Promise.resolve(pathname);
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = createPath
