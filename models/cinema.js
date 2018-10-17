const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map ( film => film.title)
};

//  START OF FILTER METHODS

// ONE METHOD TO RULE THEM ALL
Cinema.prototype.filmsByProperty = function (property, value) {
  return this.films.filter( film => film[property] === value);
};

  // Cinema.prototype.findByTitle = function (title) {
  //   const film = this.films.filter(film => film.title === title);
  //   return film[0];
  // };
  //
  // Cinema.prototype.filterByGenre = function (genre) {
  //   return this.films.filter(film => film.genre === genre);
  // };
  //
  // Cinema.prototype.filterByYear = function (year) {
  //   return this.films.filter(film => film.year === year);
  // };
  
  //  END OF FILTER METHODS

  Cinema.prototype.checkYear = function (year) {
    return this.films.some(film => film.year === year);
  };

// Cinema.prototype.checkYear = function (year) {
//   let result = false;
//   this.films.forEach( (film) => {
//     if (film.year === year) {
//       result = true;
//     }
//   } );
//   return result;
// };

// Cinema.prototype.checkYear = function (year) {
//     const result = this.films.filter(film => film.year === year);
//     if (result.length > 0) {
//       return true;
//       } else {
//       return false;
//       }
//     }
// film.placeholder === overarching filter.

Cinema.prototype.checkRuntime = function (length) {
  return this.films.every(film => film.length >= length);
};

Cinema.prototype.allRuntimes = function () {
  const runtimeArray = this.films.map (film => film.length);
  let reducer = (total, currentValue) => total + currentValue;
  return runtimeArray.reduce (reducer, 0);
};

// Cinema.prototype.allRuntimes = function () {
//   const sum = films.length.reduce((accumulator, currentValue) => accumulator + currentValue);
//   return sum;
// };


module.exports = Cinema;
