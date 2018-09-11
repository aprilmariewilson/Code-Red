const path = require("path");
const express = require("express");
const router = require("express").Router();
const apiRoutes = require("./api");



// API Routes
router.use("/api", apiRoutes);


// If no API routes are hit,
router.use(express.static('public'));
//HTML Routes
router.get('/question', function(req, res){
  res.sendFile(path.join(__dirname, "./../public/question.html"))
});
router.get('/dashboard', function(req, res){
  res.sendFile(path.join(__dirname, "./../public/dashboard.html"))
});
router.get('*',function(req,res){
res.sendFile(path.join(__dirname, './../public/index.html'))
});

module.exports = router;
