import PC from '../models/pc.model';

/**
 * Load PC and append to req.
 */
function load(req, res, next, name) {
  PC.get(name)
    .then((pc) => {
      req.pc = pc; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
  return res.json(req.pc);
}

/**
 * Import list of PC
 * @returns true if everything works
 */
function imports(req, res, next) {
  req.body.import.forEach(function(pc) {
    pc.Active = true;
    importPC(pc,res, next);
  });
}

/**
 * Create a new PC
 */
function importPC(pc, res, next) {
  PC.findOne({Name:pc.Name,Active:true}).exec()
  .then((oldPC)=>{
    //update
    if(pc != oldPC){
      oldPC.Active = false;
      oldPC.save();
    }
    pc = new PC(pc);
    pc.save()
    .then(savedPC => {
      res.json(savedPC);
      next();
    }).catch(e => {next(e);});;
  }).catch((err)=>{
    //new PC
    pc = new PC(pc);
    pc.save()
    .then(savedPC => {
      res.json(savedPC);
      next();
    }).catch(e => {next(e);});;
  });
}


/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {PC[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  PC.list({ limit, skip })
    .then(pc => res.json(pc))
    .catch(e => next(e));
}

/**
 * Delete pc.
 * @returns {PC}
 */
function remove(req, res, next) {
  const pc = req.pc;
  pc.remove()
    .then(deletedPC => res.json(deletedPC))
    .catch(e => next(e));
}

export default { load, imports, get, list, remove };
