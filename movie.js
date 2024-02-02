class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Creating an instance of the Movie class
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  console.log(casinoRoyale);
  
  // Example usage of getPG method
  const movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG-13"),
    new Movie("Movie 4", "Studio 4", "PG"),
    new Movie("Movie 5", "Studio 5"),
  ];
  
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);

  //OUTPUT:

    //   Movie {
    //     title: 'Casino Royale',
    //     studio: 'Eon Productions',
    //     rating: 'PG-13' }
    //   [ Movie { title: 'Movie 1', studio: 'Studio 1', rating: 'PG' },
    //     Movie { title: 'Movie 4', studio: 'Studio 4', rating: 'PG' },
    //     Movie { title: 'Movie 5', studio: 'Studio 5', rating: 'PG' } ]
