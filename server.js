const express = require('express');
const app = express();

app.set ('view enjine', 'ejs');
app.use(express.static("public"));

app.listen(300);