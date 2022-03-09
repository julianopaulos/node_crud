import fetch from 'cross-fetch';
import { equal } from 'assert';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

describe("product", function () {

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
            
            equal(response.status, 401);
        });

        it("should return the code 200", async function() {
            const token = jwt.sign({ id: 1 }, process.env.SECRET_KEY, {
                expiresIn: 6000 //sec
            });

            const response = await fetch("http://localhost:3333/products", {
                method: "GET",
                headers: {
                    authorization: token
                }
            });
            
            equal(response.status, 200);
        });

    });
    
});