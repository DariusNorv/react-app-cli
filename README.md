# react-app-cli
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
```

## Instalation
`npm install -g react-app-cli`

## Usage
```bash
cd my-awesome-react-app
mkdir src # if not exists
```
### Create component
`react-app-cli component MyAwesomeComponent`
### Create utility
`react-app-cli util myAwesomeUtil`

If you have any questions you can contact me via [email](mailto:djnafany@gmail.com) or [telegram](@dariusnorv)
