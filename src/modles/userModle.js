import mongoose from 'mongoose';

const Schema=mongoose.Schema;




export const UserSchema= new Schema(
    {
        email: {
             type: String, unique: true, required: true
        },

        hash: {
             type: String, required: true 
        },
        name: {
             type: String, required: true 
        },
        created_date:{
            type:Date,
            default: Date.now
        }
    });