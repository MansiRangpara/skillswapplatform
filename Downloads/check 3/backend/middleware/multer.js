// middleware/multer.js
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/courses/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|webp|mp4/;
  const ext = path.extname(file.originalname).toLowerCase();
  cb(null, allowed.test(ext));
};

export default multer({ storage, limits: { fileSize: 50 * 1024 * 1024 }, fileFilter });
