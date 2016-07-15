var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();

//this will give you the number os seconds since 1970
console.log('Current timestamp', now.unix());

var timestamp = 1468552087;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM'));
console.log('current moment', currentMoment.format('MMM D,YY @ h:mm a'));


// January 3rd, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
