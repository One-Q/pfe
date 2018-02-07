import PC from '../models/pc.model';

/**
 * List all of the problems 
 * @returns {PC} list
 */
function list(req, res, next) {
    return PC
        .find({ Problem: { $ne: null }},{ '_id': 0 })
        .select('Name Local Problem')
        .exec()
        .then(pbs => res.json(pbs))
        .catch(e => next(e));
}

/**
 * Create new user
 * @property {string} req.body.User - The email of user.
 * @property {string} req.body.Name - The name of the pc.
 * @property {string} req.body.Description - The description of the problem.
 * @property {string} req.body.Image - The url of the image of the problem (optionnal).
 * @returns {PC}
 */
function create(req, res, next) {
    let photo
    if(req.file != null)
        photo = req.file.filename
    if(!req.body.Name){
        res.status(400).json({err: 'Le nom du PC ne peut être vide'})
    }
    if(!req.body.User || !/^.{2,20}\..{2,20}@(student\.vinci\.be|vinci\.be)$/.test(req.body.User)){
        res.status(400).json({err: 'L\'adresse mail ne correspond pas un un mail de vinci'})
    }
    if(!req.body.Description){
        res.status(400).json({err: 'La description ne peut être vide'})
    }
    PC.findOne({ Name: req.body.Name, Active: true }, { '_id': 0 }).exec()
        .then((pc) => {
            if (pc == null)
                return res.sendStatus(400).json({err : 'Le PC n\'existe pas'})
            const newPc = new PC({
                Name: pc.Name,
                Local: pc.Local,
                IP: pc.IP,
                MAC: pc.MAC,
                Comment: pc.Comment,
                Active: pc.Active,
                Problem: { User: req.body.User, Description: req.body.Description, Image: photo }
            })
            return newPc.save()
                .then(savedPC => {
                    res.json(savedPC);
                    //return next();
                }).catch(e => { res.json({err: e}); });;
                
        })
        .catch((err) => {
            console.log(err)
            res.sendStatus(400).json({err : 'Le PC n\'existe pas'})
        })
}

export default { list, create };