const express=require('express');
const router=express.Router();
const port=process.env.PORT || 3000;

// static files
router.use(express.static('public'));

const jokeRoutes=require('./api/jokeRoutes');

router.use('/jokes',jokeRoutes);

// home route
router.get('/',(req,res)=>{
    res.render('pages/home',{
        title:'home',
        name:'jokes'
    })
});


router.get('*',(req,res)=>{
    if(req.url='/favicon.ico'){
        res.end()
    }else{
        res.send(`<h1>this page does not exist</h1>`)
    }
});

module.exports=router;