/**
 * @jest-environment jsdom
 */

/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/IMovie";
import { movieSort } from "../ts/functions"

test('should be sort by title if desc is true ', () => {
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
    movieSort(testData, true);

    let result = [
        {
            Title: "Pokemon 4Ever: Celebi - Voice of the Forest", // 1
            imdbID: "tt0287635", 
            Type: "movie", 
            Poster: "https://m.media-amazon.com/images/M/MV5BZDZiYjc3MWYtODE5Mi00MDM5LWFkZTAtNjAzZmUxMzc4ZGQxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", 
            Year: "2001"
        },
        {
            Title: "Pokémon the Movie 2000", // 2
            imdbID: "tt0210234", 
            Type: "movie", 
            Poster: "https://m.media-amazon.com/images/M/MV5BNzE1NjBiODAtNDVhNS00ZTI1LTg4ZjUtZTk3OWVhODljMjNjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg", 
            Year: "1999"
        },
        {
            Title: "Pokémon: Mewtwo Strikes Back - Evolution", // 3
            imdbID: "tt8856470", 
            Type: "movie", 
            Poster: "https://m.media-amazon.com/images/M/MV5BYTlmMjc0YzgtMDlmYy00NGY4LTgyOTAtODI2MzllNWI1ODBkXkEyXkFqcGdeQXVyMTMxNDQyNjM5._V1_SX300.jpg", 
            Year: "2019"
        },
    ];

    // Assert
    expect(testData).toEqual(result);
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
    movieSort(testData, false);

    let result = [
        {
            Title: "Pokémon: Mewtwo Strikes Back - Evolution", // 3
            imdbID: "tt8856470", 
            Type: "movie", 
            Poster: "https://m.media-amazon.com/images/M/MV5BYTlmMjc0YzgtMDlmYy00NGY4LTgyOTAtODI2MzllNWI1ODBkXkEyXkFqcGdeQXVyMTMxNDQyNjM5._V1_SX300.jpg", 
            Year: "2019"
        },
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
    ];

    // Assert
    expect(testData).toEqual(result);
    expect(testData[0].Title).toBe("Pokémon: Mewtwo Strikes Back - Evolution");
    expect(testData[1].Title).toBe("Pokémon the Movie 2000");
    expect(testData[2].Title).toBe("Pokemon 4Ever: Celebi - Voice of the Forest");

});