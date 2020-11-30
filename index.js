const fs = require('fs');

fs.readFile('hello.txt', (err, data) => {
    console.log(data.toString());
});
console.log('hello');

const School = require('./school');
const school = new School();
// Run Event
school.on('hello', ({ period, text }) => {
    console.log(`${text} ${period}`);
});

school.startPeriod();
