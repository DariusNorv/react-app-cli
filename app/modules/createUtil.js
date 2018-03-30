const createPath = require('./createPath');
const createFiles = require('./createMultipleFiles');
const updateUtilIndex = require('./updateUtilIndex');

const { paths } = require(`${process.cwd()}/.rcc-config.json`);

function createUtil(name) {
  const { src, utils } = paths;
  let indexUpdatetSuccessMessage;
  return createPath(`${src}/${utils}/${name}/`)
    .then(path =>
      updateUtilIndex(`${src}/${utils}/`, name)
        .then(message => {
          indexUpdatetSuccessMessage = message;
          return path;
        })
    )
    .then(path => createFiles(path, name, 'util'))
    .then(res => console.log(`Created files: \n${res.join('\n')}`))
    .then(() => console.log(indexUpdatetSuccessMessage))
    .catch(console.warn)
}

module.exports = createUtil;
