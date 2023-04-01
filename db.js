let mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/test")
.then(()=>console.log('connection established'))
.catch(()=>console.log('connection error'))

let Schema1=new mongoose.Schema({
    email:{type:String,require:true},
    password:{type:String,require:true}
})

let model1=mongoose.model('auth',Schema1)

module.exports={model1,Schema1}