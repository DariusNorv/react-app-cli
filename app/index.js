#!/usr/bin/env node
'use strict';

const { version } = require(`${__dirname}/../package.json`);
const app = require('commander');

const createReactComponent = require('./modules/createReactComponent');

app
    .version(version)

app
    .command('component <name>')
    .description('Create React component')
    .action(createReactComponent);

app
    .command('util <name>')
    .description('Create util helper')
    .action(createReactComponent);

app.parse(process.argv);