import {authenticate,
    addNewUser,
    getUser
 } from '../controllers/userController';

 

const routes = (app)=>{

        app.route('/signup')
        .get(getUser)

        .post(addNewUser);

        

       app.route('/authenticate')
        .get(authenticate)

}

export default routes;