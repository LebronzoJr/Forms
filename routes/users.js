const express = require('express');
const router = express.Router();


router.route('/').get((req,res)=>{
    res.send('User List');
}).post((req, res)=>{
    res.send("Create User");
});

router.get('/new', (req, res)=>{
    res.render('users/new', {firstName: "Test"});


});

router.route('/:id').get((req,res)=>{
    console.log(req.user);
    console.log('Getting User Data!')
    res.send(`Getting User Data for id: ${req.user['name']}`);

}).delete((req,res)=>{
    res.send(`Deleting User Data for id: ${req.params.id}`);
}).put((req,res)=>{
    res.send(`Updating User Data for id: ${req.params.id}`)
});

const users = [{name: "George"}, {name: "Justyna"}]

router.param("id", (req, res, next, id) =>{
    req.user = users[id];
    next();
});

module.exports = router;