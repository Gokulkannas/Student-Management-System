const express = require("express");
const router = express.Router();

const Students = require("../Controller/controller");

router.get("/",Students.home);
router.get("/student",Students.student);
router.post("/student",Students.postStudent);
router.get("/view",Students.getview);
router.get("/update/:id",Students.update);
router.post("/update/:id",Students.updatepost);
router.get("/delete/:id",Students.deleteStudent);

module.exports = router;