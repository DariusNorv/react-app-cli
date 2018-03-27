const createSingleFile = require('./createSingleFile');
const TPL = require('./templatesConfig');

function createFiles(path, name, type) {
  const files = {
    component: [
      {
        name: `${path}/${name}.jsx`,
        content: TPL.jsx(name)
      },
      {
        name: `${path}/${name}.scss`,
        content: TPL.scss(name)
      },
      {
        name: `${path}/${name}.spec.js`,
        content: TPL.spec(name)
      },
      {
        name: `${path}/package.json`,
        content: TPL.root(name)
      }
    ],
    util: [
      {
        name: `${path}/${name}.js`,
        content: TPL.util(name)
      }
    ]
  };

  return Promise.all(files[type].map(createSingleFile));
}

module.exports = createFiles;
