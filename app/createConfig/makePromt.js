const { createPromptModule } = require('inquirer');
const defaults = require('../templates/.default-config.json');

const isNotDefault = (answers) => !answers.useDefault;

const questions = [
  {
    type: 'list',
    name: 'useDefault',
    message: 'Do you wish to continue with defult configuration?',
    defautl: true,
    choices: [
      {
        name: 'Yes',
        value: true,
      },
      {
        name: 'Nope',
        value: false
      }
    ]
  },
  {
    type: 'input',
    name: 'paths.src',
    message: 'Specify your application sources root folder',
    default: defaults.paths.src,
    when: isNotDefault,
  },
  {
    type: 'input',
    name: 'paths.components',
    message: 'Specify your Components root folder',
    default: defaults.paths.components,
    when: isNotDefault,
  },
  {
    type: 'input',
    name: 'paths.utils',
    message: 'Specify your Utilities root folder',
    default: defaults.paths.utils,
    when: isNotDefault,
  },
  /* TODO: will add it later
  {
    type: 'input',
    name: 'paths.tests',
    message: 'Specify your Tests root folder. If you don\'t want to using custom folder leave blank',
    default: defaults.paths.tests,
    when: isNotDefault,
  }, 
  */
  {
    type: 'list',
    name: 'extensions.jsx',
    message: 'Specify the extensions for Components',
    default: defaults.extensions.jsx,
    choices: ['jsx', 'js', 'ts'],
    when: isNotDefault
  },
  {
    type: 'confirm',
    name: 'options.createStylesheet',
    message: 'Do you wish to automatically add style?',
    default: defaults.options.createStylesheet,
    when: isNotDefault,
  },
  {
    type: 'list',
    name: 'extensions.styles',
    message: 'Specify the extensions for Styles',
    default: defaults.extensions.styles,
    choices: ['css', 'scss', 'less', 'styl'],
    when: (answers) => isNotDefault(answers) && answers.options.createStylesheet
  },
  {
    type: 'list',
    name: 'extensions.utils',
    message: 'Specify the extensions for Utilities',
    default: defaults.extensions.utils,
    choices: ['js', 'ts'],
    when: isNotDefault
  },
  {
    type: 'confirm',
    name: 'options.createTestFile',
    message: 'Do you wish to automatically add Unit test file?',
    default: defaults.options.createTestFile,
    when: isNotDefault
  },
  {
    type: 'list',
    name: 'extensions.tests',
    message: 'Specify the extensions for Unit tests',
    default: defaults.extensions.tests,
    choices: ['spec.js', 'test.js'],
    when: (answers) => isNotDefault(answers) && answers.options.createTestFile
  }
]

module.exports = createPromptModule()(questions);
