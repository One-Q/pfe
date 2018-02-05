import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import pcCtrl from '../controllers/pc.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/pc - Get list of PC */
  .get(pcCtrl.list)

  /** POST /api/pc - import new PC list */
  .post(validate(paramValidation.importPCList), pcCtrl.import);

router.route('/:pcName')
  /** GET /api/pc/:pcName - Get PC */
  .get(pcCtrl.get)


/** Load user when API with userId route parameter is hit */
router.param('userId', userCtrl.load);

export default router;