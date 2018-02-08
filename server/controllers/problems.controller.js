import PC from '../models/pc.model';

/**
 * List all of the problems 
 * @returns {PC} list
 */
function list(req, res, next) {
    return PC
        .find({ Problem: { $ne: null }})
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
    if (req.file != null)
        photo = req.file.filename
    if (!req.body.Name) {
        return res.status(400).json({ err: 'Le nom du PC ne peut être vide' })
    }
    if (!req.body.User || !/^.{2,20}\..{2,20}@(student\.vinci\.be|vinci\.be)$/.test(req.body.User)) {
        return res.status(400).json({ err: 'L\'adresse mail ne correspond pas un un mail de vinci' })
    }
    if (!req.body.Description) {
        return res.status(400).json({ err: 'La description ne peut être vide' })
    }
    PC.findOne({ Name: req.body.Name, Active: true }, { '_id': 0 }).exec()
        .then((pc) => {
            if (pc == null)
                return res.sendStatus(400).json({ err: 'Le PC n\'existe pas' })
            const newPc = new PC({
                Name: pc.Name,
                Local: pc.Local,
                IP: pc.IP,
                MAC: pc.MAC,
                Comment: pc.Comment,
                Active: pc.Active,
                Problem: { User: req.body.User, Description: req.body.Description, Image: photo, DateCreated: Date.now(), Resolved: false }
            })
            return newPc.save()
                .then(savedPC => {
                    res.json(savedPC);
                }).catch(e => { res.json({ err: e }); });

        })
        .catch((err) => {
            console.log(err)
            return res.status(400).json({ err: 'Le PC n\'existe pas' })
        })
}

/**
 * Resolve a problem
 * @property {string} req.body.id - The id of the PC containing the problem
 * @returns {PC}
 */
function resolve(req, res, next) {
    if (!req.body.id) {
        return res.status(400).json({ err: 'Impossible de résoudre un problème sans fournir son id.' })
    }
    if (!req.body.id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ err: 'Format d\'id incorrect.' })
    }
    PC.findById(req.body.id, (err, pc) => {
        if (err || pc == null || pc.Problem == null)
            return res.status(400).json({ err: 'Ce probleme n\'existe pas.' });
        if (pc.Problem.Resolved == true)
            return res.status(400).json({ err: 'Ce problème est déjà résolu.' })
        pc.Problem = {
            User: pc.Problem.User,
            Description: pc.Problem.Description,
            DateCreated: pc.Problem.DateCreated,
            Resolved: true
        }
        pc.save((err, updatedPc) => {
            if (err)
                return res.status(500).json({ err: 'Impossible de résoudre le problème.' });
            res.json(updatedPc)
        })
    })
}

export default { list, create, resolve };