// Iteration 1: All directors? - Get the array of all directors.

function  getAllDirectors (moviesArr) {
    let directorsArr = moviesArr.map ((movie => {
        return movie.director
    }))
    return directorsArr
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies  (moviesArr) {
    theMovies = moviesArr.filter(function(anotherMovie) {
        if (anotherMovie.director === 'Steven Spielberg' && anotherMovie.genre.includes('Drama')) {
            return true
            }
    });
    return theMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage ( moviesArr) {
    
        if (!moviesArr.length) {
            return 0;
        }

    }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (moviesArr) {

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
    let clonedArray = JSON.parse(JSON.stringify(moviesArr));

    clonedArray.sort(function(a,b) {
        if (a.year > b.year) {
            return 1;
        }
        else if (a.year < b.year) {
            return -1;
        } else {
            if (a.title > b.title) {
                return -1;
            }
            return 0;
        }
    });
    return clonedArray;
}

   
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (moviesArr) {
    let movieList = moviesArr.map(function(elem) {
        return elem.title;
    });
    let title = moviesList.sort();

    return title.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
