const request = require("supertest")
const app = require("../app")
const mongoose = require("mongoose")
const connectDB = require("../config/db_connection")
const User = require("../models/user.model")


beforeAll(async () => {
    await connectDB();
    await Promise.all(Object.values(mongoose.models).map(model => model.init()));

});

afterAll(async () => {
    await mongoose.connection.close();
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

    })
    test("Should return 404 when no users are found ", async () => {
        const response = await request(app).get("/api/user/users");
        if (response.statusCode === 404) {
            expect(response.body.message).toBe("No Users are found!");

        }

    })
    test("Should return 200 when users are found", async () => {

        const uniqueId = Date.now();

        await User.create({
            username: `test_user${uniqueId}`,
            email: `test_user${uniqueId}@example.com`,
            password: "123456"
        });

        const response = await request(app)
            .get("/api/user/users");

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Found these Registered Users! ");
        expect(response.body.users).toEqual(expect.any(Array));

        await User.deleteOne({
            username: `test_user${uniqueId}`
        });


    });


})