let cmdhandler = require('./command-handler.js');
let testprefix = cmdhandler("/test test this is a test", "/");
console.log(testprefix);
let testmention = cmdhandler("<@1234> test test this is a test", null, "1234");
console.log(testmention);
testnotcommand = cmdhandler("test test this is a test", "/", "1234");
console.log(testnotcommand);
