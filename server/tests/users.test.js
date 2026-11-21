const request = require("supertest")
const app = require("../app")
const mongoose = require("mongoose")
const connectDB = require("../config/db_connection")

beforeAll(async ()=>{
    await connectDB();
});

afterAll(async()=>{
    await mongoose.connection.close();
});

describe("GET /api/user/users", ()=>{
    test("Should return users or 404 when no users exist", async()=>{
        const response = await request(app).get("/api/user/users");
        expect([200, 404]).toContain(response.statusCode);
    })
})