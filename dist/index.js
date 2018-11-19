"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _root = _interopRequireDefault(require("./routes/root"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 5000;
var app = (0, _express.default)();
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use((0, _cors.default)());
app.use("/api", _root.default);
app.get("/", function (req, res) {
  return res.status(200).send({
    hehe: "hehe"
  });
});
app.listen(PORT, function () {
  return console.log("Up and Running n.n");
});