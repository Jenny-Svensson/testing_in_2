/**
 * @jest-environment jsdom
 */

import { IMovie } from "../models/IMovie";
import { movieSort } from "../functions";


test('should be sort by title if desc is true ', () => {
    // Arrange
    const testData: IMovie[] = [
        {
            Title: "Pokémon the Movie 2000", // 2
            imdbID: "tt0210234", 
            Type: "movie", 
            Poster: "https://m.media-amazon.com/images/M/MV5BNzE1NjBiODAtNDVhNS00ZTI1LTg4ZjUtZTk3OWVhODljMjNjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg", 
            Year: "1999"
        },
        {
            Title: "Pokemon 4Ever: Celebi - Voice of the Forest", // 1
            imdbID: "tt0287635", 
            Type: "movie", 
            Poster: "https://m.media-amazon.com/images/M/MV5BZDZiYjc3MWYtODE5Mi00MDM5LWFkZTAtNjAzZmUxMzc4ZGQxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", 
            Year: "2001"
        },
        {
            Title: "Pokémon: Mewtwo Strikes Back - Evolution", // 3
            imdbID: "tt8856470", 
            Type: "movie", 
            Poster: "https://m.media-amazon.com/images/M/MV5BYTlmMjc0YzgtMDlmYy00NGY4LTgyOTAtODI2MzllNWI1ODBkXkEyXkFqcGdeQXVyMTMxNDQyNjM5._V1_SX300.jpg", 
            Year: "2019"
        },
    ];

    // Act
    const result = movieSort(testData, true);

    // Assert
    expect(testData[0].Title).toBe("Pokemon 4Ever: Celebi - Voice of the Forest");
    expect(testData[1].Title).toBe("Pokémon the Movie 2000");
    expect(testData[2].Title).toBe("Pokémon: Mewtwo Strikes Back - Evolution");

});


test('should be correct if desc is false ', () => {
    // Arrange
    let testData: IMovie[] = [
        {
            Title: "Pokémon the Movie 2000", // 2
            imdbID: "tt0210234", 
            Type: "movie", 
            Poster: "https://m.media-amazon.com/images/M/MV5BNzE1NjBiODAtNDVhNS00ZTI1LTg4ZjUtZTk3OWVhODljMjNjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg", 
            Year: "1999"
        },
        {
            Title: "Pokemon 4Ever: Celebi - Voice of the Forest", // 1
            imdbID: "tt0287635", 
            Type: "movie", 
            Poster: "https://m.media-amazon.com/images/M/MV5BZDZiYjc3MWYtODE5Mi00MDM5LWFkZTAtNjAzZmUxMzc4ZGQxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", 
            Year: "2001"
        },
        {
            Title: "Pokémon: Mewtwo Strikes Back - Evolution", // 3
            imdbID: "tt8856470", 
            Type: "movie", 
            Poster: "https://m.media-amazon.com/images/M/MV5BYTlmMjc0YzgtMDlmYy00NGY4LTgyOTAtODI2MzllNWI1ODBkXkEyXkFqcGdeQXVyMTMxNDQyNjM5._V1_SX300.jpg", 
            Year: "2019"
        },
    ];

    // Act
    const result = movieSort(testData, false);

    // Assert
    expect(testData[0].Title).toBe("Pokémon: Mewtwo Strikes Back - Evolution");
    expect(testData[1].Title).toBe("Pokémon the Movie 2000");
    expect(testData[2].Title).toBe("Pokemon 4Ever: Celebi - Voice of the Forest");

});

test ('should keep the order if same name, desc', ()  => {
    // Arrange
    const movies: IMovie[] = [
        {
            Title: "Pokemon 1",
            imdbID: "1234",
            Type: "movie",
            Poster: "First",
            Year: "1999",
        },
        {
            Title: "Pokemon 1",
            imdbID: "1234",
            Type: "movie",
            Poster: "Second",
            Year: "1999",
        },
    ];
    // Act
    const result = movieSort(movies, true);

    // Assert
    expect(result[0].Poster).toBe("First");
    expect(result[1].Poster).toBe("Second");
});

test ('should keep the order if same name, ascc', ()  => {
    // Arrange
    const movies: IMovie[] = [
        {
            Title: "Pokemon 1",
            imdbID: "1234",
            Type: "movie",
            Poster: "First",
            Year: "1999",
        },
        {
            Title: "Pokemon 1",
            imdbID: "1234",
            Type: "movie",
            Poster: "Second",
            Year: "1999",
        },
    ];

    // Act
    const result = movieSort(movies, false);

    // Assert
    expect(result[0].Poster).toBe("First");
    expect(result[1].Poster).toBe("Second");
});