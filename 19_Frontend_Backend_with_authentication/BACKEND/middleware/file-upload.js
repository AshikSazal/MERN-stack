const multer = require("multer");
const uuid = require("uuid/v1");

// file type
const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const fileUpload = multer({
  limits: 500000, // bits
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "uploads/images");
    },
    filename: (req, file, callback) => {
      const extension = MIME_TYPE_MAP[file.mimetype];
      callback(null, uuid() + "." + extension);
    },
  }),
  // check validity
  fileFilter: (req, file, callback) => {
    // !! means convert undefined or null to false and 'jpg','jpeg','png' files to true
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("Invalid mime type!");
    callback(error, isValid);
  },
});

module.exports = fileUpload;
