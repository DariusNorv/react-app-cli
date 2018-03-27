const createPath = require('./createPath');
const createFiles = require('./createMultipleFiles');

function createComponent(name) {
  return createPath(name)
    .then(path => createFiles(path, name, 'component'))
    .then(res => console.log(`Created files: \n${res.join('\n')}`))
    .catch(console.warn)
}

module.exports = createComponent;
