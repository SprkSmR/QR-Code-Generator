import inquirer from 'inquirer';
import * as fs from 'fs';
import * as qr from 'qr-image';

inquirer
    .prompt([
        {
            name: 'linkToQR',
            message: 'Please enter the link to convert into QR'
        },
    ])
    .then(answers => {
        var linkQR = qr.image(answers.linkToQR);
        linkQR.pipe(fs.createWriteStream('linkQR.png'));
        fs.writeFile("link.txt", answers.linkToQR, err => {
            if (err) {
                console.log("Error writing link to file.");
            } else {
                console.log("File written succesfully");
            }
        })
    });