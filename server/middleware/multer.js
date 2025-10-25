import multer from "multer";

// Store file in ./public folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public"); // ✅ Corrected spelling
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // ✅ Add timestamp to avoid overwriting
  },
});

const upload = multer({ storage });

export default upload;
