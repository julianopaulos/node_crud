import fetch from 'cross-fetch';
import { equal } from 'assert';
describe("product", function () {
    describe("register", async function() {
        it("should return the value 5 when the values 2 and 3 are passed.", function() {
            /*const result = add(2, 3);
            equal(result, 5);*/
        });
    });

    describe("list", function() {
        it("should return the code 400.", async function() {
            const response = await fetch("http://localhost:3333/products");
            equal(response.status, 400);
        });
    
        it("should return the code 401.", async function() {
            const response = await fetch("http://localhost:3333/products", {
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