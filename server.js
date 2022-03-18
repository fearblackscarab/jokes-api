const express=require('express');
const server=express();
const port=process.env.PORT || 3000;
const router=require('./routes/router');

server.use('/',router);


server.set('view engine','ejs')
server.listen(port,()=>{
    console.log(`it\'s alive!! port:${port}`)
});