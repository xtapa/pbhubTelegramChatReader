const request = require('request');

const TOKEN = '509996148:AAGYZI06da4DwhZ5kM4NfgY6e7oE0rjuTB4';
const API_ADRESS = `https://api.telegram.org/bot${TOKEN}/`;

callToApiWithMethod = (method) => {
    return API_ADRESS + method;
}

request(callToApiWithMethod('getUpdates'), { json:true }, (err, res, body) => {
    if (err) {
        return console.log(err);
    }

    body.result.forEach(element => {
        console.log(`${element.message.from.first_name} wrote \"${element.message.text}\"`);
    });
})
