let express=require('express')
let router=require('./router.js')

let app=express();

// app.use('/',(req,res)=>{
//     res.send('home page')
// })
app.use('/',router);

app.listen(8000,(req,res)=>{
    console.log('port is running on 8000 port');
})