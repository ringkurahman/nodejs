const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class started');

    setTimeout(() => {
      this.emit('hello', {period: 'class two', text: 'Go to home'});
        }, 2000);
  }
}

module.exports = School;
