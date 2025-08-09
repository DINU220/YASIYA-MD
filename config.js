const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~wMow2aSY#dl9HtbpaX6NBVj564qgsllOT7w2pwTyHKYG9mv1_b54'
};
