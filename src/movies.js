// Iteration 1: All directors? - Get the array of all directors.

function  getAllDirectors (moviesArr) {
    let directorsArr = moviesArr.map ((movie => {
        return movie.director
    }))
    return directorsArr
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (moviesArr) {}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage ( moviesArr) {
    if (moviesArr.length === 0) {
        return 0
    }
    let average = total/moviesArr.length
    return average.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function ratesAverage (moviesArr) {}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {}

    let yearTime = moviesArr.slice().cort(function(a,b) {
        if (a.year < b.year) {
            return -1;
        }
        if (a.year > b.year) {
            return 1;
        }
        if (a.year === b.year) {
            return -1;
        } else {
            return 0
        }
});
   
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (moviesArr) {
    let movieList = moviesArr.map(function(elem) {
        return elem.title;
    });
    let title = moviesList.sort();

    return title.splice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
