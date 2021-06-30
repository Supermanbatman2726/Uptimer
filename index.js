const discord = require("discord.js");
const bot = new discord.Client();
const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("./config.json");

mongoose.connect(config.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false
}).then(() => {
    console.log(chalk.green("MongoDB Connected"))
}).catch(a => {
    console.log(chalk.red(a))
});

bot.on("ready", () => {
    console.log(chalk.green(bot.user.tag))
});

require("./dashboard/server.js")(bot)
bot.login(config.bot.token);