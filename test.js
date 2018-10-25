let cmdhandler = require('./command-handler.js');
let testprefix = cmdhandler("/test test this is a test", "/");
console.log(testprefix);
testprefix = cmdhandler("<@1234> test test this is a test", null, "1234");
console.log(testprefix);
