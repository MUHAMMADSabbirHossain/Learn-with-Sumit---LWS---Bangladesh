const EventEmitter = require('events');

const emitter = new EventEmitter();

// function startPeriod() {
//     console.log('class started');

//     // raise event when bell rings
//     setTimeout(() => {
//         emitter.emit('bellRing', {
//             period: 'first',
//             text: 'period ended',
//         })
//     }, 4000);

// }

class School extends EventEmitter {
    startPeriod() {
        console.log('class started');

        // raise event when bell rings
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended',
            })
        })
    }
}

// module.exports = startPeriod;
module.exports = School;