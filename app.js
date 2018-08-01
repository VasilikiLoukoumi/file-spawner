var prompt = require('prompt');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

prompt.start();

prompt.get(['user', 'filename', 'file_extension', 'description', 'content', 'directory'], function (err, result) {
    
    result.filename += "." + result.file_extension;
    result.directory += "/" + result.filename;
    fs.appendFile(result.filename, result.content, function (err) {
        if (err) {
            throw err;
        }
        else {
            console.log("*");
            console.log("A file named " + result.filename + ",\nwas created by user " + result.user + ",\non " + new Date().toString() + ".");
            console.log("DETAILS:");
            console.log("Description:");
            console.log(result.description);            
            eventEmitter.on('placeInDirectory', moveFile);
            eventEmitter.emit('placeInDirectory');
        }
    });

   var moveFile = function() {
        fs.rename(result.filename, result.directory, function (err) {
            if (err) {
                throw err;
            }
            else {
                console.log('Location:\n' + result.directory.split('/')[0]);
                console.log("*");
            }

        });
    }

});





