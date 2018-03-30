const createPath = require('./createPath');
const createFiles = require('./createMultipleFiles');

const { paths } = require(`${process.cwd()}/.rcc-config.json`);

function createComponent(name) {
  const { src, components } = paths;

  return createPath(`${src}/${components}/${name}`)
    .then(path => createFiles(path, name, 'component'))
    .then(res => console.log(`Created files: \n${res.join('\n')}`))
    .catch(console.warn)
}

module.exports = createComponent;
