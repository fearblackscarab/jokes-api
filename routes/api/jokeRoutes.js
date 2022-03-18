const express=require('express');
const router=express.Router();
const port=process.env.PORT || 3000;
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/',(req,res)=>{
    const url='https://api.sampleapis.com/jokes/goodJokes'
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/jokes',{
            title:'A lot of jokes',
            name:'A lot of jokes',
            data
        })
    })
});


// localhost:3000/jokes/:type
router.get('/type/:type',(req,res)=>{
    const type=req.params.type;
    const url=`https://api.sampleapis.com/jokes/goodJokes`
    fetch(url).then(res=>res.json()).then(data=>{
        const typeArr=[];
        data.forEach(item=>{
            if(item.type===type){
                typeArr.push(item)
            }
        })
        return typeArr
    }).then(typeArr=>{
        res.render('pages/type',{
            title:`${type}`,
            name:`${type} jokes`,
            data:typeArr
        })
    })
})

router.get('/:id',(req,res)=>{
    const id=req.params.id;
    const url=`https://api.sampleapis.com/jokes/goodJokes/${id}`
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/joke-single',{
            title:`${data.setup}`,
            name:`${data.setup}`,
            data
        })
    })
});

module.exports=router;