const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const multer=require("multer");
const path=require("path");

const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
      cb(null, 'profilePics')//store it in this folder
    },
    filename: (req, file, cb) => {
        console.log("path of file");
        console.log(file);
      cb(null,`${Date.now()}_${file.originalname}`);//control by what file name to be used//give originalname//Data.now() is used for uploaded date with milli seconds
    },
  })
  
  const upload = multer({ storage: storage })


let app=express();
app.use(cors());
app.use(express.json());//inbuild middleware
app.use(express.urlencoded());
app.use('/profilePics', express.static('profilePics'));

app.use(express.static(path.join(__dirname,"./client/build")))//for build folder inside client access to public

let userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:String,
    email:String,
    password:String,
    phoneNo:String,
    profilePic:String
});

let User=new mongoose.model(`users`,userSchema);

app.get("*",(req,res)=>{
    res.sendFile("./client/build/index.html");
})

app.post("/login",upload.none(),async(req,res)=>{
    console.log("------This is request from signin-------")
    console.log(req.body);

    let userDetails=await User.find().and({email:req.body.email});
    console.log('------This is fetching userdetails from db-----')
    console.log(userDetails);
    
    if(userDetails.length>0){
         if(userDetails[0].password==req.body.password){
            res.json({
                status:"Success",
                data:userDetails[0]
            });
         } else{
            res.json({status:"failure",msg:"Invalid Password"}); 
         }  
    }else{
         res.json({status:"failure",msg:"Invalid User name or Password"}); 
    }
})

app.post("/signup",upload.single("profilePic"),async(req,res)=>{
    try{
        let signedUpDetails=new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            email:req.body.email,
            password:req.body.password,
            phoneNo:req.body.phoneNo,
            profilePic:req.file.path, 
        })     
        await User.insertMany([signedUpDetails]);
        console.log(req.body);
        console.log(req.file.path);
        res.json({status:"success",msg:"User Created Successfully"})
    }catch(err){
        res.json({status:"failure",msg:"Unable to Create an Account",error:err})
    }
})

app.listen(1405,()=>{
    console.log(`Listening to port 1405`)
})

let connectTOMDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://akhilchinnamsetti:akhilch1405@mern2403.tgdcw.mongodb.net/postData?retryWrites=true&w=majority&appName=mern2403");
        console.log(`Successfully connected to MDB`)
    }catch(err){
        console.log(`Unable to connect to MDB`)
    }
}
connectTOMDB();