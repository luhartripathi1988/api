import {addNewContact,
    getContact
 } from '../controllers/crmController';

const routes = (app)=>{

        app.route('/contact')
        .get(getContact)

        .post(addNewContact);


        app.route('/contact/:contactID')
        .put((req, res)=>
        res.send('PUT request sucessfull')
        )

        .delete((req, res)=>
        res.send('Delete request sucessfull')
        )

}

export default routes;