// (function (exports, require, module, __filename, __dirname) {

var people = ['sakib', 'tamim', 'mashrafe'];

// console.log(module);
/* {
    id: 'C:\\Projects\\Learn with Sumit - LWS - Bangladesh\\Node.js Tutorial Bangla  Express.js Tutorial Bangla Series for Beginners\\nodejs-tutorial\\people.js',        
    path: 'C:\\Projects\\Learn with Sumit - LWS - Bangladesh\\Node.js Tutorial Bangla  Express.js Tutorial Bangla Series for Beginners\\nodejs-tutorial',
    exports: {},
    filename: 'C:\\Projects\\Learn with Sumit - LWS - Bangladesh\\Node.js Tutorial Bangla  Express.js Tutorial Bangla Series for Beginners\\nodejs-tutorial\\people.js',  
    loaded: false,
    children: [],
    paths: [
      'C:\\Projects\\Learn with Sumit - LWS - Bangladesh\\Node.js Tutorial Bangla  Express.js Tutorial Bangla Series for Beginners\\nodejs-tutorial\\node_modules',       
      'C:\\Projects\\Learn with Sumit - LWS - Bangladesh\\Node.js Tutorial Bangla  Express.js Tutorial Bangla Series for Beginners\\node_modules',
      'C:\\Projects\\Learn with Sumit - LWS - Bangladesh\\node_modules',
      'C:\\Projects\\node_modules',
      'C:\\node_modules'
    ]
  } */

const a = 6;
function test() {
  console.log('test');

}

module.exports = {
  people,
  a,
  test
};
// return module; // default return kore dei.
// })();