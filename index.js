const express = require('express');
const session = require('express-session');
const app = express();
/**
 * 在express中使用session
 *  使用中间件 express-session
 */
// 使用session
app.use(session({
  secret: 'baggio',
  resave: false,
  saveUninitialized: true
}))

// var app = require('express')();
app.all("*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});

app.get('/',(req,res)=>{
  console.log(req.session);
  if(req.session.views){
    req.session.views += 1
  }
  else{
    req.session.views = 1
  }
  res.json(req.session);
})

const fs = require('fs');
app.get('/goods.do',(req,res)=>{
  const data = fs.readFileSync('./goods.json');
  // res.jsonp(data.toString());
  res.json(JSON.parse(data));
})

app.listen(3000,()=>{
  console.log('服务器已启动...');
})