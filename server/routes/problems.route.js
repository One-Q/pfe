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
    cb(null, 'problem_' + Date.now() + '.' + mime.extension(file.mimetype))
  }
})
let upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = mime.extension(file.mimetype);
    if (ext !== 'png' && ext !== 'jpg' && ext !== 'gif' && ext !== 'jpeg' && ext !== 'svg') {
      return cb(null, false)
    }
    cb(null, true)
  }
});

const router = express.Router();

router.route('/')
  /** GET /api/problems - Get list of Problems */
  .get(pbCtrl.list)

  /** POST /api/problems - create a new problem */
  // validation in comment because the request isn't a JSON request
  .post(/*validate(paramValidation.problem)*/ upload.single('image'), pbCtrl.create);

router.route('/resolve')
  /** POST /api/problems/resolve - Resolve a problem   */
  .post(pbCtrl.resolve)
export default router;