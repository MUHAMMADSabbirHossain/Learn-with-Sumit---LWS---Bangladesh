// module scafolding
const math = {};



math.random = function (min, max) {
    const minRange = min;
    const maxRange = max;

    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange); // min and max included
};



// modules exports
module.exports = math;