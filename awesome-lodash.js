$(document).ready(function() {

  var information = [ //given array of information
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

  var i = 1; //set counter to 1, as _.reduce will iterate (arr.length - 1) times

  var arrayOfAwesomeIndexes = _.pluck(information, 'awesomeIndex');
  //grab each value of awesomeIndex, store in an array.

  //remove flasy values with compact, reduce all remaining values into a single sum
  var awesomeTotal = _.reduce(_.compact(arrayOfAwesomeIndexes), function(a, b) {
    i++;
    return a + b;
  })

  var awesomeAverage = awesomeTotal / i; //calculate average

  $('#awesome-index').text(awesomeAverage);
  //update html file with calculated average
})
