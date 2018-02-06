import PC from '../models/pc.model';

function list(req, res, next) {
    return PC
        .find({ Problem: { $ne: null } })
        .select('Name Local Problem')
        .exec()
        .then(pbs => res.json(pbs))
        .catch(e => next(e));
}

/**
 * Create new user
 * @property {string} req.body.user - The email of user.
 * @property {string} req.body.name - The name of the pc.
 * @property {string} req.body.desc - The description of the problem.
 * @property {string} req.body.img - The url of the image of the problem (optionnal).
 * @returns {PC}
 */
function create(req, res, next) {
    
    /*const problem = new User({
        username: req.body.username,
        mobileNumber: req.body.mobileNumber
    });

    user.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));*/
}

export default { list, create };