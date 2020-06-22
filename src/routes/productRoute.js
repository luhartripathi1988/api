import {addNewProduct,
    getProduct,
    getCategory
 } from '../controllers/productController';

const routes = (app)=>{

        app.route('/product')
        .get(getProduct)

        .post(addNewProduct);

        


        app.route('/product/:productID')
        .put((req, res)=>
        res.send('PUT request sucessfull')
        )

        .delete((req, res)=>
        res.send('Delete request sucessfull')
        )

        app.route('/getcategory')
        .get(getCategory)

}

export default routes;