/*
Show difference between wait and expect (thanks to Andrew Chen)

% seq 5
1
2
3
4
5
*/

var nexpect = require('../lib/nexpect');

// example#1
nexpect.spawn('seq 5')
  .expect('1')
  .wait('3')
  .run(function (err) {
    if(err) {
      throw err;
    }
    console.log('example#1, 1 was expected, 3 was waited for');
  });

// example#2
nexpect.spawn('seq 5')
  .expect('1')
  .expect('3')
  .run(function (err) {
    console.log('example#2, error that 2 was not expected:', err);
  });

// example#3
nexpect.spawn('seq 5')
  .expect('1')
  .wait('6')
  .run(function (err) {
    console.log('example#3, error that 6 was expected but did not occur:', err);
  });
