/**
 * @jest-environment jsdom
 */

import { getData } from "../ts/services/movieservice";

jest.mock("axios", () => ({
    get: async (url:string) => {
        return new Promise((resolve, reject) => {
            if (url.endsWith("error")) {
                reject([]);
            } else {
                resolve([{Title: "Starwars", imdbID: "123", Type: "movie", Poster: "starwars.jpg", Year: "2023"}]);
            }
        });
    },
}));

test("should get data correctly ", async () => {
    let data = await getData("test");
});

test("should get error getting data", async () => {
    try {
        let data = await getData("error")
    }
    catch (error: any) {
        expect(error.length).toBe(0)
    }
});
