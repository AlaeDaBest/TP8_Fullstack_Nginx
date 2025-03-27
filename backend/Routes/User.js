const express=require('express');
const router=express.Router();
const User=require('../Model/UserModel');

router.get('/',async(req,res)=>{
    const users=await User.find();
    res.json(users);
});
router.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const user=await User.findOne({_id:id});
    if(!user){
        res.status(404).send('Not Found');
    }
    res.json(user);
});
router.post('/',(req,res)=>{
    const {name,email,password}=req.body;
    if(!name,!email,!password){
        res.send('All Fields Are Required');
    }
    const newUser=new User(req.body);
    newUser.save();
    res.json(newUser);
});
router.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    const user=await User.deleteOne({_id:id});
    res.json(user);
})

module.exports=router;