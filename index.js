import express from 'express';
import routes from './src/routes/crmRoute';
import product from './src/routes/productRoute';
import user from './src/routes/userRoute';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

const app =express();
const PORT =4000;

// Mongoose Connection
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
        useNewUrlParser:true,
        useUnifiedTopology:true
});

//bodyparser setup

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

routes(app);
product(app);
user(app);

app.get('/',(req, res)=>
    res.send(`node and express server runing on port ${PORT}`)
);

app.listen(PORT, ()=>
console.log(`your server running on port ${PORT} `)
);


