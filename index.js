// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });
// const { fetchCoordsByIP } = require('./iss');

// fetchCoordsByIP('184.146.38.102', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:' , coordinates);
// });
// const { fetchISSFlyOverTimes } = require('./iss');

// const exampleCoords = { latitude: '43.653226', longitude: '-79.3831843' };

// fetchISSFlyOverTimes(exampleCoords, (error, passOverTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned pass over times:' , passOverTimes);
// });
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimings = function(passTimes) {
  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next time it will pass at ${dateTime} for ${duration} seconds`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimings(passTimes);
});

module.exports = { printPassTimings }