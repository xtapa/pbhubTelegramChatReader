import { BOT_TOKEN } from './src/utils/constants';
import BotApi from './src/botApi/botApi';

const botApi = new BotApi(Constants.BOT_TOKEN);

console.log('Hallo welt');

// request( , { json:true }, (err, res, body) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log(body.result[4].message.chat);
// })
