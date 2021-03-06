# react-app-cli [![Build Status](https://travis-ci.org/DariusNorv/react-app-cli.svg?branch=master)](https://travis-ci.org/DariusNorv/react-app-cli)
Simple create and scraffolding React components and utilities.
This cli was created after reading [this post](https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed)
So many thanks for idea to [David Gilbertson](https://hackernoon.com/@david.gilbertson?source=post_header_lockup)

## Preparing
First of all you need to create `src` folder. It's a start for application sources.
For best expirience you may configure aliases for webpack to resolve `Components` and `Utils`.
```javascript
// webpack.config.js
// ...
alias: {
  // ...
  'Components': path.resolve(`${__dirname}/src/components`),
  'Utils': path.resolve(`${__dirname}/src/utils`),
  // ...
}
// ...
```
After this you can use simple importing in you React application:
```javascript
import MyTab from 'Components/MyTab';

import myUtil from 'Utils/myUtil';
import { myUtil1, myUtil2 } from 'Utils';
```

## Instalation
`npm install -g react-app-components-cli`

## Usage
```bash
cd my-awesome-react-app
mkdir src # if not exists
```
### Configure
`rcc config`
After running config it will create a `.rcc-config.json` in the root folder.
You can edit settings manually in JSON file any time.
### Create component
`rcc component MyAwesomeComponent`
### Create utility
`rcc util myAwesomeUtil`

## Main Idea.
When you create a new component, automattically will be created new folder with main JSX file, test and style. Also will de created package.json file inside this dir for best resolving names.
The same thing happens when create utility. The difference is that utility is not creates package.json. All utilities are stored in index.js filera

If you have any questions you can contact me via [email](mailto:djnafany@gmail.com) or [telegram](https://t.me/dariusnorv)
