/**
 * @jest-environment jsdom
 */

import { IMovie } from "../models/IMovie";
import * as movieApp from '../movieApp';
import * as movieservice from '../services/movieservice';

jest.mock("../services/movieservice.ts");

beforeEach(() => {
    document.body.innerHTML = "";
});

/*###############################
||            init            ||
################################*/

test ('should create form when submitted ', () => {
    document.body.innerHTML = `
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>
    `;

    const form = document.getElementById("searchForm") as HTMLFormElement;
    let spyOnHandleSubmit = jest.spyOn(movieApp, "handleSubmit").mockReturnValue(new Promise<void>((resolve)=> {
        resolve();
    }));

    movieApp.init();
    form.submit();

    expect(spyOnHandleSubmit).toHaveBeenCalled();
    spyOnHandleSubmit.mockRestore();
});


/*################################
||       handleSubmit()       ||
################################*/

test ('should call getData ', () => {
    document.body.innerHTML = `
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <div id="movie-container"></div>`;

    const searchText = document.getElementById("searchText") as HTMLInputElement;
    searchText.value = "Star Wars";
    const spyOnGetData = jest.spyOn(movieservice, "getData").mockReturnValue(Promise.resolve([]));

    movieApp.handleSubmit();

    expect(spyOnGetData).toBeCalledWith("Star Wars");
    spyOnGetData.mockRestore();
});

test ('should call createHtml if there is movies', async () => {
    document.body.innerHTML = `
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <div id="movie-container"></div>
`;

    const searchText = document.getElementById("searchText") as HTMLInputElement;
    searchText.value = "Star Wars";
    const createHtmlSpy = jest.spyOn(movieApp, "createHtml");
    const movies: IMovie [] = [
        {
            Title: "Star Wars: Episode IV - A New Hope",
            imdbID: "tt0076759",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
            Year: "1977"
        },
    ];
    const getData = jest.spyOn(movieservice, "getData").mockReturnValue(Promise.resolve(movies));

    await movieApp.handleSubmit();

    expect(getData).toBeCalledTimes(1);
    expect(createHtmlSpy).toBeCalledTimes(1);
});


/*################################
||         createHtml         ||
################################*/

test('should create Html correctly ', () => {
    const movies: IMovie[] = [
        {
            Title: "Star Wars",
            imdbID: "1234",
            Type: "movie",
            Poster: "star.jpg",
            Year: "1000",
        },
    ];

document.body.innerHTML = `
    <div id="movie-container"></div>
`;
const container = document.getElementById("movie-container") as HTMLDivElement;

movieApp.createHtml(movies,container);

expect(container.innerHTML).toContain("Star Wars");

});


/*################################
||      displayNoResult       ||
################################*/

test('should display no results with p tag', () => {
    document.body.innerHTML = `
    <div id="movie-container"></div>
    `;

    let message = "<p>Inga sökresultat att visa</p>";

    const container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;
 
    movieApp.displayNoResult(container);
    expect(container.innerHTML).toEqual(message);
});
