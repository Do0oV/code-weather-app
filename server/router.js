const router = require('koa-router')();
const ctrl = require('./controllers/controllers');

router
  .get('/getAll', ctrl.getAll)
  .get('/getOne/:id', ctrl.getOne)
  .put('/save/:id', ctrl.save)

module.exports = router;