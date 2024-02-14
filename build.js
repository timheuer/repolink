var fs = require('fs');
var archiver = require('archiver');

var output = fs.createWriteStream('gh-repolink.zip');
var archive = archiver('zip');

output.on('close', function () {
    console.log('Zipped the folder!');
});

archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);

// Add all files in the current directory to the archive
archive.glob('**', {
    // Exclude node_modules directory and zip file itself
    ignore: ['node_modules/**', 'gh-repolink.zip', 'build.js', 'package-lock.json', 'package.json', '.gitignore', 'privacy.md', 'readme.md', 'license.md']
});

archive.finalize();