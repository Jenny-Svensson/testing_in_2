import { IMovie } from "../../models/IMovie";

export let testMovies: IMovie[] = [
    {
        Title: "Star Wars: Episode IV - A New Hope",
        imdbID: "tt0076759",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
        Year: "1977"
    },
    {
        Title: "Star Wars: Episode V - The Empire Strikes Back",
        imdbID: "tt0080684",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        Year: "1980"
    },
    {
        Title: "Star Wars: Episode VI - Return of the Jedi",
        imdbID: "tt0086190",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        Year: "1983"
    },
    {
        Title: "Star Wars: Episode VII - The Force Awakens",
        imdbID: "tt2488496",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
        Year: "2015"
    },

];

export async function getData(): Promise<IMovie[]> {
    return new Promise((resolve, reject) => {
      if (testMovies.length > 0) {
        resolve(testMovies);
        } else {
        reject("Error");
        }
    });
}