require('babel-register');

var ReactDOMServer = require('react-dom/server');
var HomePage = require('./HomePage');

var contents = [
  {
    id: 123,
    title: 'Google!',
    url: 'http://www.google.com'
  },
  {
    id: 66,
    title: 'Reddit!',
    url: 'http://www.reddit.com'
  },
  {
    id: 442,
    title: 'DecodeMTL!',
    url: 'http://www.decodemtl.com'
  }
];

var htmlStructure = HomePage({posts: contents});
var html = ReactDOMServer.renderToStaticMarkup(htmlStructure);

console.log(html);
