//console.log("connected");

// Movies Database

// Array of objects of Movies

// title - string, rating - number, has watched - boolean
// looop through to produce sentences that say watched title - rating

var movies = [
	{
		title: "MASH",
		rating: 4,
		hasWatched: true
	},
	{
		title: "Rocky",
		rating: 3,
		hasWatched: true
	},
	{
		title: "W",
		rating: 1,
		hasWatched: false
	}
];

for (var i = 0; i < movies.length; i++){
	if (movies[i].hasWatched == true){
		console.log('You have watched "' + movies[i].title + '" - ' + movies[i].rating + ' stars');
	}
	else if (movies[i].hasWatched == false){
		console.log('You have not seen "' + movies[i].title + '" - ' + movies[i].rating + ' stars');
	}
};

