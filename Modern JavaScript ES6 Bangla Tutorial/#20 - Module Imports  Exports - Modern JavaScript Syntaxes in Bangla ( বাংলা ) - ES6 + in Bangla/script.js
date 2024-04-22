// imports/exports

// import { pi, a } from "./external.js" // named import
import { pi as varPi, a as varA } from "./external.js" // named import
import *  as test from "./external.js" // alice import

// console.log(pi, a);
console.log(test);
console.log(test.pi);
console.log(varPi, varA);

import external, { pi, myFunc } from "./external.js"
console.log(external, pi);

myFunc();



