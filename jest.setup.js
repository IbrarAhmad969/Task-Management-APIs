require("dotenv").config({ path: ".env.test" });




console.log("MONGO_URI loaded:", !!process.env.MONGO_URI);
console.log("MONGO_URI starts with mongodb:", 
    process.env.MONGO_URI?.startsWith("mongodb://") ||
    process.env.MONGO_URI?.startsWith("mongodb+srv://")
);

console.log("DB_NAME:", process.env.DB_NAME);