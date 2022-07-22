import express from 'express';
import {userSignup,userLogin} from '../contollers/userController.js';
import {getProducts, getProductById} from '../contollers/productController.js'

const router = express.Router();


router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products',getProducts);
router.get('/product/:id',getProductById);

export default router;