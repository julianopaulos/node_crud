import fetch from 'cross-fetch';
import { equal } from 'assert';

describe("store", function() {
    describe("list", function() {
        it("should return the code 400.", async function() {
            const response = await fetch("http://localhost:3333/stores");
            //const responseBody = await response.json();
            //equal(responseBody.statusCode, 400);
            equal(response.status, 400);
        });

        it("should return the code 401.", async function() {
            const response = await fetch("http://localhost:3333/stores", {
                method: "GET",
                headers: {
                    authorization: "abv"
                }
            });
            //const responseBody = await response.json();
            equal(response.status, 401);
        });
    });
});