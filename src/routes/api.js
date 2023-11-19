const express = require("express");
const router = express.Router();
const StudentInfoController = require('../controllers/StudentInfoController')

router.get("/student/all",StudentInfoController.allStudents)
router.get("/student/stuInfoById/:id",StudentInfoController.stuInfoById);
router.post("/student/registration",StudentInfoController.registration);

module.exports = router;