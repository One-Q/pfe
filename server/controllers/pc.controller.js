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
  var promises = [];
  PC.find({Local:req.body.Local}).exec()
  .then(oldPCs=>{
    //Desactivate PC from the local
    oldPCs.forEach(oldPC=>{
      oldPC.Active = false;
      promises.push(oldPC.save());
    });
  });
  Promise.all(promises).then(function(){
    var nbrPc = 0;
    var array = [];
    req.body.import.forEach(function(pc) {
      nbrPc++;
      pc.Active = true;
      pc.Local = req.body.Local;
      return importPC(pc, res, function(err,ret){
        if(!err){
          array.push(ret);
        }else{
          console.log("err !");
          console.log(err);
        }
        nbrPc --;
        if(nbrPc <= 0){
          res.json(array);
          //next();
        }
      });
    });
    //next();
  });
}

/**
 * Import a PC
 */
function importPC(pc, res, finish) {
  PC.find({Name:pc.Name}).exec()
  .then(oldPCs=>{
    console.log(oldPCs.length);
    if(oldPCs.length <= 0){
      //new PC
      console.log(pc.Name+" new");
      //console.log(err);
      pc = new PC(pc);
      return pc.save()
      .then(savedPC => {
        finish(null,savedPC);
      }).catch(e=>finish(e));
    }
    console.log(pc.Name+" update");
    oldPCs.forEach(function(oldPC){
      console.log(oldPC.Name+" oldPC");
      //update
      oldPC.MAC = pc.MAC;
      oldPC.IP = pc.IP;
      oldPC.Local = pc.Local;
      oldPC.Comment = pc.Comment;
      oldPC.Active = pc.Active;
      return oldPC.save().catch((e)=>{console.log("error save")});
    });
    finish(null,pc);
  });
}


/**
 * Get pc list.
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
