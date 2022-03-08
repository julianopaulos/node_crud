import fetch from 'cross-fetch';
import { equal } from 'assert';

describe("store", function() {
    describe("list", function() {
        it("should return the code 400.", async function() {
            const response = await fetch("http://localhost:3333/stores");
            const responseBody = await response.json();
            equal(responseBody.statusCode, 400);
        });
    });
});