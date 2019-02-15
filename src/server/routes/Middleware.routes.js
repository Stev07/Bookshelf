const SECRET = "ChangeThisSecretToken";

const isCoach = (req, res, next) => {
    const token = req.body.token;

    const user_id = jwt.verify(token, SECRET).user;

    User.findById({
        _id: user_id,
    })
        .then(result => {
            if (!result.coach) {
                res.send("Vous ne pouvez pas faire ça, vous n'êtes pas coach.");
                return;
            }
            next();
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(
                "Une erreur de base de données à été trouvée. Conctacté votre administrateur",
                err,
            );
            return;
        });
};

const isOwnerUser = (req, res, next) => {
    const token = req.body.token;

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err || !decoded) {
            res.send("NOPE OWNER");
        } else {
            next();
        }
    });
};

module.exports = {SECRET, isCoach, isOwnerUser};
