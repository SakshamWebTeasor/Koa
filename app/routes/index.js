const Router = require('koa-router');
const router = new Router();

const publicApiRoutes = require('./publicRoutes');
// const adminRoutes = require('./adminRoutes');

// Group routes under /api path
router.use('/test', publicApiRoutes);

// Group routes under /admin path
// router.use('/admin', adminRoutes);

module.exports = router.routes();
