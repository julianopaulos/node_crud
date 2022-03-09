import fetch from 'cross-fetch';
import { equal } from 'assert';

describe("auth", async function() {
    it("should return the code 404.", async function() {
        const body = {
            username: "test",
            password: "testTEST"
        };
        const response = await fetch("http://localhost:3333/auth", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
        
        equal(response.status, 404);
    });

    it("should return the code 401.", async function() {
        const body = {
            username: "julianop099",
            password: "testTEST"
        };
        const response = await fetch("http://localhost:3333/auth", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
        
        equal(response.status, 401);
        
    });

    it("should return the code 200.", async function() {
        const body = {
            username: "julianop099",
            password: "12345678"
        };
        const response = await fetch("http://localhost:3333/auth", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
        
        equal(response.status, 200);
    });

});