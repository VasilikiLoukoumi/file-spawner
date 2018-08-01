var prompt = require('prompt');
var fs = require('fs');

prompt.start();

prompt.get(['user', 'filename', 'file_extension', 'description', 'content'], function (err, result) {
    console.log('Input taken by user ' + result.user + '.');
    result.filename += "." + result.file_extension;
    fs.appendFile(result.filename, result.content, function (err) {
        if (err) {
            throw err;
        }
        else {
            console.log("File " + result.filename + " created by user " + result.user + " at " + new Date().toString() + ".");
            console.log("Description:");
            console.log(result.description);
        }
    });
   
});





