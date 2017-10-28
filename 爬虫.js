var Crawler = require("crawler");
const fs = require('fs');
let arrData = [];
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            // console.log($("title").text());
            $('.cloth_shoplist li').each(function(){
              // console.log($(this).attr('src'));
              // console.log($(this).attr('alt'));
              var goods = {};
              if($(this).find('.pic img').attr('data-original')){
                goods.img = $(this).find('.pic img').attr('data-original');
              }
              else{
                goods.img = $(this).find('.pic img').attr('src');
              }
              goods.title = $(this).find('.pic').attr('title');
              arrData.push(goods);
              // console.log($(this).find('.pic').attr('title'));
              // console.log($(this).find('.pic img').attr('data-original'));
            })
            fs.writeFileSync('./goods.json',JSON.stringify(arrData));
            console.log('抓取数据成功');
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('http://category.dangdang.com/cid4001136.html');