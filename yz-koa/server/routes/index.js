const router = require('koa-router')()
// const controllers = require('../controllers')c

router.get('/home', require('../controllers/home'))
// router.post('/login', require('../controllers/login'))
// router.post('/adduser', require('../controllers/adduser'))
module.exports = router
