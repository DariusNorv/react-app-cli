#!/usr/bin/env node
'use strict';

const { version } = require(`${__dirname}/../package.json`);
const app = require('commander');
const configExists = require('./modules/resolveConfig');


const createComponent = (name) =>
  configExists()
    .then(() => require('./modules/createComponent')(name))
    .catch(console.warn);

const createUtil = (name) =>
  configExists()
    .then(() => require('./modules/createUtil')(name))
    .catch(console.warn);

const makeConfig = () => require('./createConfig');

app
  .version(version)

app
  .command('component <name>')
  .description('Create React component')
  .action(createComponent);

app
  .command('util <name>')
  .description('Create util helper')
  .action(createUtil);

app
  .command('config')
  .description('Create a default configuration')
  .action(makeConfig);

app.parse(process.argv);
