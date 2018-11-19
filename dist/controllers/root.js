"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.root = void 0;

var root = function root(req, res) {
  return res.status(200).send({
    hi: "there"
  });
};

exports.root = root;