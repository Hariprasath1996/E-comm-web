const express = require('express')
const router = express.Router()
const { CreateOrder } = require('../controller/orderController')


router.route('/order').post(CreateOrder)

module.exports = router ;
