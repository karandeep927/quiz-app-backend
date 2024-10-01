const {Router} = require('express')
const {getQuestion} = require('../controllers/questionController')
const {validateParams} = require('../middleware/checkparam')

const router = Router()

router.get("/:name/:level",getQuestion)

module.exports = router