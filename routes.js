const controller = require('./api/controller')


const {Router} = require('express');
const router = Router();

router.get('/',controller.getStudents)
router.get('/:id',controller.getStudentByID)
router.post('/addstudent',controller.addStudent)
router.delete('/delstudent/:id',controller.deleteByID)
module.exports = router