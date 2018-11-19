"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _root = require("../controllers/root");

var api = (0, _express.Router)();
api.get("/", [], _root.root);
var _default = api;
exports.default = _default;