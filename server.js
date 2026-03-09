const express = require('express');
const app = express();

app.set ('view enjine', 'ejs');
app.use(express.static("public"));

app.get('/submit')

app.listen(300);