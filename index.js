// created a sample movieData
const moviesData = [
    {
      id: 1,
      title: 'Inception',
      genre: 'Sci-Fi',
      year: 2010,
      availableCopies: 5,
    },
];

// created movie class with its props
class Movie {
    constructor(id, title, genre, releaseYear, availableCopies) {
      this.id = id;
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.availableCopies = availableCopies;
    }
}

// Storage functions (replace with your actual storage implementation)
function getMoviesFromStorage() {
    const movies = moviesData.map((movieData) => {
      return new Movie(
        movieData.id,
        movieData.title,
        movieData.genre,
        movieData.year, // Use 'year' to match the property in moviesData
        movieData.availableCopies
      );
    });
    return movies;
}

function getMovieById(movieId) {
    const movies = Movie.getMoviesFromStorage();
    const movie = movies.find((movie) => movie.id === movieId);
    return movie;
}

const movies = Movie.getMoviesFromStorage();
console.log(movies);

const moviesId = Movie.getMovieById(1);
console.log(moviesId);

const movie2 = new Movie(1, 'Aquaman', 'Sci-Fi', 2023, 90);
console.log(movie2);

//class for the user 
class User {
    constructor(id, name, email, rentedMovies = []) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.rentedMovies = rentedMovies;
    }
}
User.getUsersFromStorage = () => usersData.map(userData => new User(...Object.values(userData)));

let johnDoe = User.getUsersFromStorage().find(user => user.name == "John Doe");
johnDoe.addRentedMovie(movie2);

console.log("Johns Rentals: ", johnDoe.rentedMovies);

usersData.push({
    id: 4,
    name: "Emily Smith",
    email: "emily@gmail.com"
});

let emilySmith = User.getUsersFromStorage().find(user => user.name == "Emily Smith")
emilySmith.removeRental(movie2);

console.log("Emilys Rentals after removing a rent: ", emilySmith.rentedMovies);



class Rental {
    constructor(userId, movieId, rentalDate, dueDate) {
      this.userId = userId;
      this.movieId = movieId;
      this.rentalDate = rentalDate;
      this.dueDate = dueDate;
    }
}

//   get getAllMovies() {
//     const movies = new getMoviesFromStorage();
//     return movies;
//   }

function getUsersFromStorage() {
    // Retrieve users from your chosen storage method
}

// API endpoints

function rentMovie(userId, movieId) {
    const movies = getMoviesFromStorage();
    const users = getUsersFromStorage();
  
    const movie = movies.find((movie) => movie.id === movieId);
    const user = users.find((user) => user.id === userId);
  
    if (movie.availableCopies > 0) {
      movie.availableCopies--;
      user.rentedMovies.push(movieId);
    }
}