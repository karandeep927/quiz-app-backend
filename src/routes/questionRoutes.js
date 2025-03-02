const {Router} = require('express')
const {getQuestion} = require('../controllers/questionController')
const {validateParams} = require('../middleware/checkparam')

const router = Router()

router.get("/basic/:topic",validateParams,getQuestion)
router.get("/intermediate/:topic",validateParams,getQuestion)
router.get("/advance/:topic",validateParams,getQuestion)

module.exports = router

