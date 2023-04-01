let express=require('express')
let {model1,Schema1}=require('./db.js')

let router=express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:true}))

// router('/',(req,res)=>{
//     res.send('home page')
// })

router.post('/auth/signup',async (req,res)=>{
    
    let {email,password}=req.body;
    let doc1=await new model1({
    email:email,
    password:password
    })
    doc1.save();
    console.log(req.body);
    res.send('signup successfully')
    
})

router.post('/auth/login',async (req,res)=>{
    try 
    {
        let {email,password}=req.body;
        let data=await model1.find({email:email})
        if(email)
        {
            if(data[0].email==email)
            {
                if(data[0].password==password)
                {
                    res.send('login successfully')
                }
                else
                {
                    res.send('incorrect password')
                }
            }
            else
            {
                res.send("enter your email")
            }
        }
        else
        {
            res.send('invalid email id')
        }
        // res.send('data received')
        console.log(data[0].email);
    } catch (error) 
    {
        
    }
})

module.exports=router;