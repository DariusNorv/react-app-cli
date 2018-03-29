const { exists } = require('fs-extra');
const { resolve } = require('path');

const [root, def] = [
  `${process.cwd()}/.rcc-config.json`,
  resolve(`${__dirname}app/templates/.default-config.json`)
]

const configExists = (async function () {
  return await exists(`${process.cwd()}/.rcc-config.json`);
})();

function resolveConfigFile() {
  return configExists ? root : def;
};

module.exports = {
  configExists,
  resolveConfigFile
}
