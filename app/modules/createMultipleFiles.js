const createSingleFile = require('./createSingleFile');
const TPL = require('./templatesConfig');
const config = require(`${process.cwd()}/.rcc-config.json`);

function createFiles(path, name, type) {
  const files = {
    component: [
      {
        name: `${path}/${name}.${config.extensions.jsx}`,
        content: TPL.jsx(name)
      }
    ],
    util: [
      {
        name: `${path}/${name}.${config.extensions.utils}`,
        content: TPL.utils(name)
      }
    ]
  };

  if (config.options.createTestFile) {
    files.component.push({
      name: `${path}/${name}.${config.extensions.tests}`,
      content: TPL.tests(name)
    });
  }

  if (config.options.createStylesheet) {
    files.component.push({
      name: `${path}/${name}.${config.extensions.styles}`,
      content: TPL.styles(name)
    });
  }

  if (config.options.createComponentsRoot) {
    files.component.push({
      name: `${path}/package.json`,
      content: TPL.root(name)
    });
  }

  return Promise.all(files[type].map(createSingleFile));
}

module.exports = createFiles;
