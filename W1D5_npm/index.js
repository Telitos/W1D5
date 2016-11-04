var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var tellus = "No way" + chalk.inverse("No way")
var encore = "is it?" + chalk.grey("it is not")
console.log(message)
console.log(tellus)
console.log(encore)
