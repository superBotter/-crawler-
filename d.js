const cheerio = require('cheerio');
const $ = cheerio.load('<h3>我是标题</h3>');
$('h3').css('color','red');
console.log($.html());