'use strict';

// Modules
let chalk = require('chalk');
let fs = require('fs');
let path = require('path');
let program = require('commander');

program
    // .version('0.1.0')
    .option('-f, --filename [name.csv]', 'Pluck from the specified file [name.csv]')
    .parse(process.argv);

if (!program.filename) {
    program.help();
}

let file = fs.readFileSync(path.join(__dirname, `../${program.filename}`), 'utf-8');

file = file.replace(/"/g, '');

fs.writeFileSync(path.join(__dirname, `../${program.filename}.sans-quotes.csv`), file);

console.log('Quotes have been removed' + chalk.green('!'));