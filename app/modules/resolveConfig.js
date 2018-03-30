const { exists } = require('fs-extra');
const configPath = `${process.cwd()}/.rcc-config.json`;

async function configExists() {
  try {
    if (await exists(configPath)) {
      return Promise.resolve(configPath);
    }
    return Promise.reject('App is not configured. Please run rcc config firts.');
  } catch (err) {
    console.log(err);
  }
};

module.exports = configExists;
