"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var axios_1 = require("axios");
dotenv.config();
var DB_ADRESS = process.env.RESET_ADRESS;
var reset = function () {
    axios_1["default"]
        .post(DB_ADRESS, {
        users: []
    })
        .then(function (res) { return res.status; });
};
reset();
exports["default"] = reset;
