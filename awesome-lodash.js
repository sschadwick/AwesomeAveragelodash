$(document).ready(function() {

  var information = [
  {
  name: 'Trinity',
  occupation: 'programmer',
  awesomeIndex: 10
  },
  {
  name: 'Mater',
  occupation: 'tow truck'
  },
  {
  name: 'Number 5',
  occupation: 'programmer',
  awesomeIndex: 7
  },
  {
  name: 'Alice',
  occupation: 'programmer',
  awesomeIndex: 9
  },
  {
  name: 'Zaphod',
  occupation: 'President of the Galaxy'
  },
  {
  name: 'Bob Parr',
  occupation: 'programmer',
  awesomeIndex: 6
  }];

  var i = 1;

  var arrayOfAwesomeIndexes = _.pluck(information, 'awesomeIndex');
  //grab each value of awesomeIndex, store in an array.

  var awesomeTotal = _.reduce(_.compact(arrayOfAwesomeIndexes), function(a, b) {
    i++;
    return a + b;
  })
  //remove falsy values from array, reduce all remaining values into a single sum

  var awesomeAverage = awesomeTotal / i; //calculate average

  $('#awesome-index').text(awesomeAverage);
  //update html file with calculated average
})
