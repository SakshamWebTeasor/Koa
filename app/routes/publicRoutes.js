const Router = require('koa-router');
const { sayHiTest, sendDataTest } = require('../controllers/publicController');
const router = new Router();

// Define a GET route
router.get('/data', sayHiTest);

// Define a POST route
router.post('/data', sendDataTest);

module.exports = router.routes();
