const { sleepTime } = require("../utils/utils");

const baseSrc = "http://tempomail.org/mailbox/";

let page = new Object();

async function emailGenerator(browser) {
    page = await browser.newPage();
    await page.goto(baseSrc);
//Elminsterxld#0007
    await sleepTime(4000);

    return await page.evaluate(() => {
        return document.querySelector('#email_id').textContent;
    });
}

async function readMail() {

    await page.close();

 
}

module.exports = { emailGenerator, readMail }
