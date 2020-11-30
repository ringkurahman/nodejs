const fs = require('fs');
const School = require('./school');

fs.readFile('hello.txt', (err, data) => {
    console.log(data.toString());
});
console.log('hello');

// Create school object
const school = new School();
// Run Event
school.on('hello', ({ period, text }) => {
    console.log(`${text} ${period}`);
});

school.startPeriod();
