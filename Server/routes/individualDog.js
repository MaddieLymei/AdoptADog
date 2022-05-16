const express = require('express');
const router = express.Router();

router
.route("/:id")
.get((req, res)=>{
    dogID = req.params.id;
    res.send(`individual dog GET ${dogID}`);
})
.put((req, res)=>{
    dogID = req.params.id;
    res.send(`individual dog UPDATE ${dogID}`);
})
.delete((req, res)=>{
    dogID = req.params.id;
    res.send(`individual dog DELETE ${dogID}`);
})

module.exports = router;