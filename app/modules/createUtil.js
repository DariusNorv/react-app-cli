const createPath = require('./createPath');
const createFiles = require('./createMultipleFiles');
const updateUtilIndex = require('./updateUtilIndex');

const { paths } = require('../config.json');

function createUtil(name) {
  const { src, utils } = paths;
  return createPath(`${src}/${utils}/${name}/`)
    .then(path => 
      updateUtilIndex(path, name)
        .then(({path, message}) => {
          console.log(message);
          return path;
        })
    )
    .then(path => createFiles(path, name, 'util'))
    .then(res => console.log(`Created files: \n${res.join('\n')}`))
    .catch(console.warn)
}

module.exports = createUtil;
