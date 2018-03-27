#!/usr/bin/env node
'use strict';

const { version } = require(`${__dirname}/../package.json`);
const app = require('commander');

const createComponent = require('./modules/createComponent');
const createUtil = require('./modules/createUtil');

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

app.parse(process.argv);
