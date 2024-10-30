const expr = require(`express`);
const exp = expr();
const port = 3000;
const fs = require('fs');
const event = require('events');
const neww = new event();
const path = require('path');
//middle ware


//responses to requests
exp.get('/home', (req, res)=>{
    res.write('ytser');
    res.end();
})
exp.get('/home/content', (req, res)=>{
   res.writeHead(200, {"content-type": "text/plain"});
   res.write('ytser is not good');
   res.end();
})
exp.get('/home/content/center', (req, res)=>{
    res.write('ytser much better');
    res.end();
})

exp.listen(port);