const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~dRRigAZb#kD78w7RiLeIo_98OxzJ89klUZUrVt9ji8jiJRXWuJxw'
};
