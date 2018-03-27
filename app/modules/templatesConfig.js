const jsxTemplate = name => (
  `import React from 'react';
import './${name}.scss';

const ${name} = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
};

export default ${name};`
);

const cssTemplate = (name) => (
  `.${name} {
}`
);

const specTemplate = name => (
  `import React from 'react';
import ReactDOM from 'react-dom';
import ${name} from 'Components/${name}';

it('#${name}', () => {
  const div = document.createElement('div');
  ReactDOM.render(<${name} />, div);
  ReactDOM.unmountComponentAtNode(div);
});`
);

const utilTemplate = name => (
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
  jsx: jsxTemplate,
  scss: cssTemplate,
  spec: specTemplate,
  util: utilTemplate,
  root: packageTemplate
};
