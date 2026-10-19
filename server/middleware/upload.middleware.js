
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        const uniqueName =
            `${Date.now()}-${require("crypto").randomUUID()}${path.extname(file.originalname).toLowerCase()}`;

        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        "application/pdf",
        "image/png",
        "image/jpeg"
    ];

    if (allowedTypes.includes(file.mimetype)) {
        return cb(null, true);
    }

    cb(new Error("Only PDF, PNG, and JPEG files are allowed"));
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

module.exports = { upload };
