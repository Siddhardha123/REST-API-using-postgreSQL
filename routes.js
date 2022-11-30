import controller from './api/controller.js';

import { Router } from 'express';
const router = Router();

router.get('/',controller.getStudents)
router.get('/:id',controller.getStudentByID)
router.post('/addstudent',controller.addStudent)
router.delete('/delstudent/:id',controller.deleteByID)

export default  router;