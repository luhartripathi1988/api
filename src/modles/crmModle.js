import mongoose from 'mongoose';

const Schema=mongoose.Schema;

export const ContactSchema= new Schema(
    {
        firstname:{
            type:String,
            required:'Enter First Name'
        },
        lastname:{
            type:String,
            required:'Enter Last Name'
        },
        phonenumber:{
            type:Number
        },
        created_date:{
            type:Date,
            default: Date.now
        }
    });