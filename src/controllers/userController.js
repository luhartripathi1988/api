import mongoose from 'mongoose';
import jwt  from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { UserSchema } from '../modles/UserModle';
const User= mongoose.model('user',UserSchema);


export const authenticate = ( req, res )=>{
    let newUser= new User(req.body);
    console.log(req.body.password);
    if (newUser && bcrypt.compareSync(req.body.password, newUser.hash)) {
        const token = jwt.sign({ sub: newUser.id }, config.secret);
        console.write(token);
        return {
            ...newUser.toJSON(),
            token
        };
        
        
    }
    
         
}


export const addNewUser = (req, res)=>{
    let newUser= new User(req.body);
    if (req.body.password) {
        newUser.hash = bcrypt.hashSync(req.body.password, 10);
    }
    newUser.save((err, user)=>{
       
        if(err){
            res.send(err);

        }
        res.json(user);

    });
}





export const getUser = (req, res)=>{
    
    User.find({},(err, user)=>{
       
        if(err){
            res.send(err);

        }
        res.json(user);

    });
}

