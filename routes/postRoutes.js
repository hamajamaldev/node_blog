const express  = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.all('/', postController.index);
router.get('/create', postController.create);
router.post('/store', postController.store);
router.get('/:id/edit', postController.edit);
router.post('/:id', postController.update);
router.post('/:id/delete', postController.destroy);



module.exports = router;
