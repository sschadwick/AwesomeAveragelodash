var information = [{
	name: 'Bob',
	occupation: 'programmer',
	awesomeIndex: 7,
},
{	name: 'Alice',
	occupation: 'programmer',
	awesomeIndex: 9,
},
{	name: 'Zaphod',
	occupation: 'President of the Galaxy'
}];

var programmers = 0;
var awesomeTotal = 0;
var awesomeAverage = 0;

_.forEach(information, function(information){
	if (information.occupation === 'programmer'){
		awesomeTotal += information.awesomeIndex;
		programmers++;
	}
});
awesomeAverage = awesomeTotal / programmers;
$('#awesome-index').append(awesomeAverage);