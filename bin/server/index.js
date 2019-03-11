"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _Api = _interopRequireDefault(require("./routes/Api.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bodyParser = require("body-parser");

const {
  APP_PORT
} = process.env;
const app = (0, _express.default)();

const mongoose = require("mongoose");

const uri = "mongodb://mongo/bookshelf";
const connOptions = {
  useNewUrlParser: true,
  authSource: "admin",
  user: "dev",
  pass: "dev"
};
mongoose.connect(uri, connOptions).then(() => console.log("connected")).catch(err => console.log(err));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(_express.default.static(_path.default.resolve(__dirname, "../../bin/client")));
app.use("/api", _Api.default);
app.listen(APP_PORT, () => console.log(`🚀 Server is listening on port ${APP_PORT}.`));
//# sourceMappingURL=index.js.map