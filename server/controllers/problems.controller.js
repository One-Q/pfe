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
    PC.findOne({ Name: req.body.Name, Active: true }, { '_id': 0 }).exec()
        .then((pc) => {
            if (pc == null)
                return res.sendStatus(400)
            const newPc = new PC({
                Name: pc.Name,
                Local: pc.Local,
                IP: pc.IP,
                MAC: pc.MAC,
                Comment: pc.Comment,
                Active: pc.Active,
                Problem: { User: req.body.User, Description: req.body.Description, Image: photo }
            })
            newPc.save()
                .then(savedPC => {
                    res.json(savedPC);
                    //return next();
                }).catch(e => { next(e); });;
                
        })
        .catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
}

export default { list, create };