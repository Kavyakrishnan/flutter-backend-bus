var Express=require('express')
var Bodyparser=require('body-parser')
var Mongoose=require('mongoose')
var{busmodel}=require('./Model/busmodel')
var app=Express()
 app.use(Bodyparser.urlencoded({extended:true}))
 app.use(Bodyparser.json())

 app.get('/',(req,res)=>{
    res.send(" Welcome to my Bus nodejs")
})
app.post('/bus',(req,res)=>{
    var Busobject=new busmodel(req.body)
    res.json(Busobject)
    

})


app.listen( process.env.PORT || 3000,(req,res)=>{
    console.log("server is running")
})
