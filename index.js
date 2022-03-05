//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const count = require('./count.js');
const sort = require('./sort.js');
const select = require('./select.js');
//Middleware init
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

//Posting the client input, cURL qeuery
app.post('/count', function (req, res) {

    //Counting words occerrence
    const result = count.countWords(req.body);

    //console.log(result);

    //Sorting words based on their occerrences
    const endResult = sort.sorting(result);

    //console.log(JSON.stringify(endResult));

    const trimedResult = select.selecting(endResult);
    //Output to CMD
    res.send('post : ' + JSON.stringify(trimedResult));
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});