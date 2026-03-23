const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('User List');
});

router.get('/list', (req,res)=>{
    res.send
})

router.get('/new', (req, res)=>{
    res.send('User New Form');


});
router.get('/:id', (req,res)=>{
    res.send (`Getting User Data: ${req.params.id}`);
});

module.exports = router;