/**
 * @jest-environment jsdom
 */

import { getData } from "../services/movieservice";

jest.mock("axios", () => ({
    get: async (url:string) => {
        return new Promise((resolve, reject) => {
            if (url.endsWith("error")) {
                reject([]);
            } else {
                resolve({ data: {Search: getData }});
            }
        });
    },
}));

test("should get data correctly ", async () => {
    await getData("test");
});

test("should get error getting data", async () => {
    try {
        await getData("error")
    }
    catch (error: any) {
        expect(error.length).toBe(0)
    }
});
