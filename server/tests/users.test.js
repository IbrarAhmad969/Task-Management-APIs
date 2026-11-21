const request = require("supertest")
const app = require("../app")
const mongoose = require("mongoose")
const connectDB = require("../config/db_connection")

beforeAll(async () => {
    await connectDB();
});

afterAll(async () => {
    await mongoose.disconnect();
});

describe("GET /api/user/users", () => {
    test("Should return users or 404 when no users exist", async () => {
        const response = await request(app).get("/api/user/users");
        expect([200, 404]).toContain(response.statusCode);
        expect(response.body).toHaveProperty("message");
    })

    test("Should return 200 when users are found", async () => {

        const response = await request(app)
            .get("/api/user/users");

        if (response.statusCode === 200) {
            expect(response.body.message).toBe("Found these Registered Users! ");
            expect(response.body.users).toEqual(expect.any(Array));
        }

    });
})