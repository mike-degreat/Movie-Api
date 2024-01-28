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