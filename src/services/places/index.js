//Tools and Middleware
const express = require("express")
const fs = require("fs")
const { join } = require("path")
const expressValidator = require("express-validator")

//instances
const places = express.Router()

//endpoints
places.post("/", (req, res, err) => {})
places.get("/", (req, res, err) => {})
places.put("/", (req, res, err) => {})
places.delete("/", (req, res, err) => {})

//export module
module.exports = places

//TEST COMMITT
