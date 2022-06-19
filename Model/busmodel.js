var Mongoose=require('mongoose')
var Mongooseschema=new Mongoose.Schema({
    busname:{type:String,required:true},
    busroute:{type:String,required:true},
    busowner:{type:String,required:true},
    
})
var busmodel=Mongoose.model('buses',Mongooseschema)
module.exports={busmodel}