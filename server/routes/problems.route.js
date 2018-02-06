import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import pbCtrl from '../controllers/problems.controller';
import multer from 'multer';
import mime from 'mime';

// Configuration about Multer's path and naming of files
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images')
  },
  filename: function (req, file, cb) {
    cb(null, 'problem_' + Date.now()+'.'+mime.extension(file.mimetype))
  }
})
let upload = multer({ storage: storage });

const router = express.Router();

router.route('/')
  /** GET /api/problems - Get list of Problems */
  .get(pbCtrl.list)

  /** POST /api/problem - create a new problem */
  .post(/*validate(paramValidation.problem), */upload.single('image'), pbCtrl.create);

export default router;