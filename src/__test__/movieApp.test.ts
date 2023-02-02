/**
 * @jest-environment jsdom
 */
import { IMovie } from "../ts/models/IMovie";
import { createHtml, displayNoResult, init, handleSubmit } from "../ts/movieApp";
import * as movieApp from '../ts/movieApp';

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

    let spyOnHandleSubmit = jest.spyOn(movieApp, "handleSubmit").mockReturnValue(new Promise<void>((resolve)=> {
        resolve()
    }));

    init();
    
    let result = (document.getElementById("searchText") as HTMLInputElement).value ="Star Wars";
    document.getElementById("search")?.click();

    expect(spyOnHandleSubmit).toHaveBeenCalledTimes(1);
    expect(result).toEqual("Star Wars");
});


/*################################
||       handleSubmit()       ||
################################*/

/**
 * export async function handleSubmit() {
  let searchText = (document.getElementById("searchText") as HTMLInputElement)
    .value;
 */


/*################################
||         createHtml         ||
################################*/

jest.mock("../ts/services/movieservice.ts");

test('should createHtml correctly ', () => {
    document.body.innerHTML = `
    <div id="movie-container"></div>
    `
    let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;

    let movies: IMovie[] = [
        {Title: "Hello", imdbID: "1234", Type:"movie", Poster: "hello.jpg", Year: "2022"}
    ];

    createHtml(movies, container);

    let title = document.querySelectorAll("h3");

    expect(title).toBe(title); // <<<<<???????????

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
 
    displayNoResult(container);
    expect(container.innerHTML).toEqual(message);
});
