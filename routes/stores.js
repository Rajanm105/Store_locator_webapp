const express = require('express');
const {checkRole, userAuth} = require('../config/auth');
const storeController = require('../controllers/stores')
const {getStores, addStore} = require('../controllers/stores')


const router = express.Router();

router.route('/storemap').get(getStores).post(addStore)

// router.get("/storeadd",[userAuth,checkRole("producer")],storeController.addStore);


module.exports = router;