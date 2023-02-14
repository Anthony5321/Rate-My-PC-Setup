
const PC = require('../client/src/PC.json')
const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();



// router.get('/', (req, res) => res.send('This is root!'))

router.get(`/`, controllers.getAllPcs)

router.get(`/pc/:id`, controllers.getPcById)

router.get(`/pc/post/:id`, controllers.getPostByPcId)

router.post('/post', controllers.createPost)

router.get('/post/:id', controllers.getPostById)

router.put('/pc/post/:id/:id', controllers.updatePost)

router.delete('/pc/post/:id/:id', controllers.deletePost)


module.exports = router;