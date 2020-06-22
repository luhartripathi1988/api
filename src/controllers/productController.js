import mongoose from 'mongoose';
import { ProductSchema } from '../modles/productModle';

const Product= mongoose.model('Product',ProductSchema);

export const addNewProduct = (req, res)=>{
    let newProduct= new Product(req.body);

    newProduct.save((err, product)=>{
       
        if(err){
            res.send(err);

        }
        res.json(product);

    });
}

export const getProduct = (req, res)=>{
    
    Product.find({},(err, product)=>{
       
        if(err){
            res.send(err);

        }
        res.json(product);

    });
}

export const getCategory = (req, res)=>{
    
    Product.aggregate([{
        "$group": {
            "_id": "$category",
        }
    }],(err, product)=>{
       
        if(err){
            res.send(err);

        }
        res.json(product);

    });
}