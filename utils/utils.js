const fs = require('fs');
const path = require("path");




function sleepTime(time) {
    return new Promise((resolve) => {
        setTimeout(e => resolve(), time);
    })
}

module.exports = {  sleepTime };
