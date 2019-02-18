import User from "../models/User";
const jwt = require("jsonwebtoken");

const SECRET = process.env.secret || "ChangeThisSecretToken";

const isCoach = (req, res, next) => {
    const token = req.body.token;

    const user_id = jwt.verify(token, SECRET).user;

    User.findById({
        _id: user_id,
    })
        .then(result => {
            if (!result.coach) {
                res.status(404).json({
                    errors: [
                        "Vous ne pouvez pas faire ça, vous n'êtes pas coach.",
                    ],
                });
                return;
            }
            next();
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                errors: [
                    "Une erreur de base de données à été trouvée. Conctacté votre administrateur",
                    err.message,
                ],
            });
            return;
        });
};

const isLogged = (req, res, next) => {
    const token = req.body.token;

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err || !decoded) {
            res.status(403).json({
                errors: [
                    "Vous ne pouvez pas exécuter cette action si vous n'êtes pas connecté.",
                    err.message,
                ],
            });
        } else {
            next();
        }
    });
};

module.exports = {SECRET, isCoach, isLogged};
