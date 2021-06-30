const express = require("express");
const app = express();
const chalk = require("chalk");
const ejs = require("ejs");
const path = require("path");
const config = require("../config.json");

module.exports = async bot => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.listen(config.dashboard.port, () => console.log(chalk.green(`Started Server On Port ${config.dashboard.port}`)));

    app.get("/", (req, res) => {
        res.render("index", {
            bot
        })
    });
}