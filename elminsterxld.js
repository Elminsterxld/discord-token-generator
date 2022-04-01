const  elminsterxld = require("crypto")
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const { default: RecaptchaPlugin, BuiltinSolutionProviders } = require("puppeteer-extra-plugin-recaptcha");
const CapMonsterProvider = require("puppeteer-extra-plugin-recaptcha-capmonster");
CapMonsterProvider.use(BuiltinSolutionProviders);
const { PuppeteerBlocker } = require('@cliqz/adblocker-puppeteer')
const {fetch} = require('cross-fetch')
const fs = require('fs')
const request = require('request')
  let axios= require("axios")
const { readFileSync } = require('fs')
const playwright = require("playwright");
const { Console } = require('console')
const { emailGenerator, readMail } = require("./users/email-handler");
const { sleepTime } = require("./utils/utils");



   
 



const captchakey = "CAPMONSTER APİ KEY"




puppeteer.use(
    RecaptchaPlugin({
        provider: {
            id: "capmonster",
            token: "CAP MONSTER APİ KEY" //  CAPMONSTER API KEY ⚡
        },
        visualFeedback: true // YEŞİL PASS , KIRMIZI HATA
    })
);


// Console logs
const o = fs.createWriteStream('./elminsterxldd.log', {flags:'a'})
const errorOutput = fs.createWriteStream('./elminsterxld.log', {flags:'a'})
const accounts = fs.createWriteStream('accounts.txt', {flags:'a'})

const logger = new Console(o, errorOutput)

const t0 = process.hrtime();
function write_log(goodnews, text){
  const t1 = process.hrtime(t0);
  const time = (t1[0]* 1000000000 + t1[1]) / 1000000000;
  const color = goodnews ? "\x1b[32m" : "\x1b[31m";

  console.log(`${color} [ELMİNSTERXLD - ${time}s] \x1b[37m ${text}`);
  logger.log(`[ELMİNSTERXLD - ${time}s] ${text}`);
}
const capmonster = require('capmonster');
const captcha = new capmonster('CAP MONSTER APİ KEY');
 
// Get current balance
captcha.getBalance().then((balance) => {
    console.log(balance);
});


  
// Code start there
async function fill_input(page, infoname, info){

      
    
  const p = await page.$('input[name=' + infoname + ']');
  await p.focus();
  await page.keyboard.type(info);
}


   
 const emailSelector = `input[name="email"]`;
  const usernameSelector = `input[name="username"]`;
  const passwordSelector = `input[name="password"]`;
  const checkBoxSelector = `input[type="checkbox"]`;
  const submitbutton = `button[type="submit"]`;
  const verifybutton = `table[role="presentation"]`;
  
async function fill_discord(DiscordPage, username, password, email){

  await DiscordPage.bringToFront();
  
  await DiscordPage.goto('https://discord.com/register', {"waitUntil" : "networkidle0", timeout: 70000});

  write_log(true, "Discord Hesabı Oluşturuluyor.");

 await DiscordPage.type(emailSelector, email);
  await DiscordPage.type(usernameSelector, username);
  await DiscordPage.type(passwordSelector, password);
  await DiscordPage.click(".css-1hwfws3");
  await DiscordPage.keyboard.type("12");
  await DiscordPage.keyboard.press("Tab");
  await DiscordPage.keyboard.type("12");
  await DiscordPage.keyboard.press("Tab");
  await DiscordPage.keyboard.type("1995");

  
 
   DiscordPage.waitForSelector('input[type*=checkbox]').then(() => {
      DiscordPage.$eval('input[type*=checkbox]', el => el.click());
    }).catch(e => {});
 
   
   await  DiscordPage.$eval('button[type=submit]', (el) => el.click());

}


const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}


async function break_captcha(DiscordPage){
  try {
    await DiscordPage.waitForSelector('[src*=sitekey]');
    write_log(false, "Captcha bulundu!");

    while(true){
      try{
        await DiscordPage.solveRecaptchas();
        var t;

        write_log(true, "Captcha Geçildi!");
        return true;
      } catch(err) {
        write_log(false, "Captcha - Hata");
        sleep(3000);
      }
    }
  } catch(e){
    write_log(true, "Captcha Bulunamadı!");
  };
}

	






async function create_accinfos(browser, d) {
 
const usernamecek = readFileSync('./usernames.txt', 'utf8').split(/\r?\n/);
username = usernamecek[Math.floor(Math.random() * usernamecek.length)]
  const password = elminsterxld.randomBytes(16).toString('hex');

 
   

  write_log(true, `Username: ${username}`);
  write_log(true, `Password: ${password}`);
  write_log(true, `E-mail: ${email}`);


  const DiscordPage = d;
  await fill_discord(DiscordPage, username, password, email);

  const client = d._client;
  var token;

 





              
	
             
            
    
	

 
  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007

  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007

  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
     //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007

  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
  
  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007

  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
  
	
   
  
 
 client.on('Network.webSocketFrameSent', ({requestId, timestamp, response}) => {  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
    try {  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007

    
      const json = JSON.parse(response.payloadData);  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
      if(!token && json["d"]["token"]){  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
        token = json["d"]["token"];  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
        write_log(true, `Token: ${token}`);  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
       let list = fs.readFileSync('./tokens.txt').toString();  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007

        if (!list) {  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
          list = `${token}`;  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
        } else {  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
          list += `\n\n${token}`;  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
        }

fs.writeFileSync('./tokens.txt', list);  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
      };
    //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
      
              
    
             
            
     } catch(e){};  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
    
    
  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007

    //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
    
   
  })  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
 

  

  
 
  
  

                            await break_captcha(DiscordPage);  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
							
				
    


 
  

  return `${email}:${username}:${password}:${token}`;
}




(async () => {  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
	  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
  console.log("Elminsterxld#0007");  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
    //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
const options = {  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--window-position=0,0',
    '--window-size=1600,900',
  ],
  defaultViewport: null,
  ignoreHTTPSErrors: true,
  headless: false,
}

const browser = await puppeteer.launch(options);    //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
 email = await emailGenerator(browser);  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007


  try {
    const page = await browser.newPage();  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007

   


    const infos = await create_accinfos(browser, page);  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007

 await sleepTime(13000);  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
    write_log(true, "Bilgiler txt kaydedildi!");  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007

    accounts.write(infos + "\n");  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
  } catch(e) {
    console.log(e);  //Elminsterxld#0007Elminsterxld#0007Elminsterxld#0007
  } finally {
 await sleepTime(1300)
    write_log(true, "Tamamlandı!");
    try{
 await sleepTime(13000);
      browser.close();
    } catch(e){};
  }
})();
