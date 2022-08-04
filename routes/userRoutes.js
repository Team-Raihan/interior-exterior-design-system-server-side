const express = require('express');
const { registerUser, authUser, verifyAdmin} = require('../controllers/userControllers');

const router= express.Router()

router.post("/",registerUser)
router.post("/login",authUser)
router.get("/admin/:email",verifyAdmin)

module.exports =router