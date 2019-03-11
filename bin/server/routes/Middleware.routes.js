"use strict";

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const jwt = require("jsonwebtoken");

const SECRET = process.env.secret || "ChangeThisSecretToken";

const isCoach = (req, res, next) => {
  const token = req.query.token;
  const user_id = jwt.verify(token, SECRET).user;

  _User.default.findById({
    _id: user_id
  }).then(result => {
    if (!result.coach) {
      res.status(404).json({
        errors: ["Vous ne pouvez pas faire ça, vous n'êtes pas coach."]
      });
      return;
    }

    next();
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      errors: ["Une erreur de base de données à été trouvée. Conctacté votre administrateur", err.message]
    });
    return;
  });
};

const isLogged = (req, res, next) => {
  const token = req.query.token;
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err || !decoded) {
      res.status(403).json({
        errors: ["Vous ne pouvez pas exécuter cette action si vous n'êtes pas connecté.", err.message]
      });
    } else {
      next();
    }
  });
};

module.exports = {
  SECRET,
  isCoach,
  isLogged
};
//# sourceMappingURL=Middleware.routes.js.map