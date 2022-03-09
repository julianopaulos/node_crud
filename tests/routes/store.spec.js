import fetch from 'cross-fetch';
import { equal } from 'assert';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

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
            
            equal(response.status, 401);
        });

        it("should return the code 200", async function() {
            const token = jwt.sign({ id: 1 }, process.env.SECRET_KEY, {
                expiresIn: 6000 //sec
            });

            const response = await fetch("http://localhost:3333/stores", {
                method: "GET",
                headers: {
                    authorization: token
                }
            });
            
            equal(response.status, 200);
        });
    });
});