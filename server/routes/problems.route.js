import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import pbCtrl from '../controllers/problems.controller';

const router = express.Router(); 

router.route('/')
  /** GET /api/problems - Get list of Problems */
  .get(pbCtrl.list)

  /** POST /api/problem - create a new problem */
  .post(validate(paramValidation.problem), pbCtrl.create);

export default router;