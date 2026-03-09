const express = require('express');
const app = express();

app.set ('view enjine', 'ejs');
app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/solution', (req,res) =>{
    let num1 = parseInt(req.query['num1']);
    let num2 = parseInt(req.query['num2']);
    let total =num1 + num2;
    res.send(`<h2>${num} + ${num2} = ${total} </h2>`);
});

//GET /submit - logs every parameter
app.get('/submit', (req, res)=>{
    console.log('--- GET Request Received ---');
    console.log('Query Parameters: ', req.query);
    Object.entries(req.query).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    console.log('----------------------------');
    res.send('<h2>GET request received!</h2><pre>' + JSON.stringify(req.query, null, 2) + '</pre>');
});

//POST /submit - logs body contents
app.post('/submit', (req,res) =>{
    console.log('--- POST Request Received ---');
    console.log('Body')
})

app.listen(3030);