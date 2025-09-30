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
    });

/* 
3. Create a txt file to save the user input using the native fs node module.
*/
