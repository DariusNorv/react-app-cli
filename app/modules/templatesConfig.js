const config = require(`${process.cwd()}/.rcc-config.json`);

const jsx = name => (
  `import React from 'react';${config.options.createStylesheet ? `\nimport './${name}.${config.extensions.styles}';` : ''}

const ${name} = () => {
  return (
    <div />
  )
};

export default ${name};`
);

const styles = (name) => '';

const tests = name => (
  `import React from 'react';
import ReactDOM from 'react-dom';
import ${name} from 'Components/${name}';

it('#${name}', () => {
  const div = document.createElement('div');
  ReactDOM.render(<${name} />, div);
  ReactDOM.unmountComponentAtNode(div);
});`
);

const utils = name => (
  `function ${name} () {
/* do something cool */
};

export default ${name};`
);

const packageTemplate = name => (
  `{
  "main": "${name}.jsx"
}`
);

module.exports = {
  jsx,
  styles,
  tests,
  utils,
  root: packageTemplate
};
