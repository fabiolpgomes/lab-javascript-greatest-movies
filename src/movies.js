// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
    const allDirectors = moviesArray.map((elements) => {
        return elements.director;
      });
    
      console.log(allDirectors)
    return allDirectors    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovie = moviesArray.filter((movies) => {
        if (movies.director === "Steven Spielberg" &&  movies.genre.includes("Drama"))  {
            return movies
        }
       
    })

    console.log(dramaMovie)
    return dramaMovie.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

/* 
  function scoresAverage(moviesArray) {
    if (moviesArray.length === undefined){
      return 0;
    } else {
      let score = moviesArray.reduce( (acumulator, currentValue) => {
        return acumulator + currentValue.score;
      },0);
      
     return score/moviesArray.length.toFixed(2);
     
    }};

 */

    function scoresAverage(moviesArray) {
      if (!moviesArray.length) return 0;
      let aux, avg;
      const sum = moviesArray.reduce((previousValue, currentValue) => {
        //console.log(currentValue.score);
        if (!currentValue.score) {
          aux = 0;
        } else aux = currentValue.score;
        return previousValue + aux;
      }, 0);
      avg = sum / moviesArray.length;
      console.log(avg.toFixed(2));
      return +avg.toFixed(2);
    }




// Iteration 4: Drama movies - Get the average of Drama Movies

  function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length) return 0;
    let searchGenre = "Drama";
    const arrGenre = moviesArray.filter(({ genre }) =>
      genre.includes(searchGenre)
    );
   
     return scoresAverage(arrGenre);
     console.log(scoresAverage(arrGenre));
  }




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
