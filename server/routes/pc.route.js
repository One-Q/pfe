import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import pcCtrl from '../controllers/pc.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/pc - Get list of PC */
  .get(pcCtrl.list)

  /** POST /api/pc - import new PC list */
  .post(validate(paramValidation.importPCList), pcCtrl.imports);

router.route('/:pcName')
  /** GET /api/pc/:pcName - Get PC */
  .get(pcCtrl.get)


/** Load PC when API with pcName route parameter is hit */
router.param('pcName', pcCtrl.load);

export default router;