var Express=require('express')
var Bodyparser=require('body-parser')
var Mongoose=require('mongoose')
var{busmodel}=require('./Model/busmodel')
var app=Express()
 app.use(Bodyparser.urlencoded({extended:true}))
 app.use(Bodyparser.json())
 Mongoose.connect("mongodb+srv://kavya:12345@cluster0.2q4qp.mongodb.net/busflutterdb")

 app.get('/',(req,res)=>{
    res.send(" Welcome to my Bus nodejs")
})
app.get('/view',async(req,res)=>{
    try{
        var result=await busmodel.find()
        res.send(result)
    }
    catch(error)
    {
        res.send(error)
    }
   
})
app.post('/delete',async(req,res)=>{
    try{
var result=await busmodel.findByIdAndDelete({"_id":req.body._id})

res.send(result)
    }
    catch(error){
        res.json({"status":"error"})

    }

})
app.post('/edit',async(req,res)=>{
    try{
var result=await busmodel.findByIdAndUpdate({"_id":req.body._id},req.body)
res.json(result)
    }
    catch(error){
        res.json({"status":"error"})

    }
})
app.post('/search',async(req,res)=>{
    try{
var result= await busmodel.find(req.body)
res.json(result)
    }
    catch(error){
        res.json({"status":"error"})

    }
})
app.post('/bus',(req,res)=>{
    var Busobject=new busmodel(req.body)
   Busobject.save((error)=>{
    if(error){
res.send({"status":error})
    }
    else{

    res.send({"status":"success"})
}
   })
          
        })
   
    



app.listen( process.env.PORT || 80,(req,res)=>{
    console.log("server is running")
})
