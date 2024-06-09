const express = require('express')
const router = express.Router()
router 
.get("/",(res,req) => res.send("get all projects"))
.post("/add")
.delete("/:id")
.post("/:id")
//crud
module.exports = router