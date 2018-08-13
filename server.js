var express= require('express');
var bodyparser = require('body-parser');
var path=require('path');

var api = require('./server/routes/api');
var app=express();
app.use('/',express.static(path.join(__dirname,'/dist')));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/api',api);

app.get('*',(req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/html'});
    res.sendFile(path.join(__dirname,'/dist/Meanstackapp/index.html'));
})

app.listen('9200',()=>{
    console.log('Server Started at localhost:9200');
})