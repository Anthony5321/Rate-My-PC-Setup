

const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.get('/', (req, res) => res.send('This is root!'))

router.post('/post', controllers.createPost)

router.get('/post/:id', controllers.getPostById)

router.put('/post/:id', controllers.updatePost)

router.delete('/post/:id', controllers.deletePost)

module.exports = router;