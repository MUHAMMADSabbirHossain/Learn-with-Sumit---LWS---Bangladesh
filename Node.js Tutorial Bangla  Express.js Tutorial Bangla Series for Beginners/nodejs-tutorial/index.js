const _ = require('lodash');

// console.log(_.last([1, 2, 3]));

// github link for the video resouce
// https://github.com/learnwithsumit/nodejs-basic-bangla

// console.log(window); // ReferenceError: window is not defined

// setTimeout(() => {
//     console.log('test');

// }, 2000);

// var a = 5;

// console.log(global);
{/* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout], 
  setInterval: [Function: setInterval],   
  setTimeout: [Function: setTimeout] {    
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {   
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 37.0773999998346,
      nodeStart: 2.618900000117719,       
      v8Start: 5.6319999997504056,        
      bootstrapComplete: 27.022599999792874,
      environment: 14.39449999993667,     
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1739510121560.902
  },
  fetch: [AsyncFunction: fetch]
} */}

console.log(__filename);
console.log(__dirname);

const people = require('./test/people');
console.log(people);
console.log(people[0]);
console.log(_.last(people.people));
