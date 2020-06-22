import mongoose from 'mongoose';

const Schema=mongoose.Schema;

export const ProductSchema= new Schema(
    {
        productname:{
            type:String,
            required:'Enter Product Name'
        },
        category:{
            type:String,
            required:'Enter Category'
        },
        imageurl:{
            type:String,
            required:'Enter imageurl'
        },
        makes:{
            type:Number
        },
        description:{
            type:String,
            required:'Enter description'
        },
        created_date:{
            type:Date,
            default: Date.now
        }
    });