const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.get('/api/items', (req, res) => {
    const items = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jp",
                "status": "MEAP",
                "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jp", 
                "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
        }
    ]

    res.json({
        myitems:items
    })
})

app.post('/api/items', (req, res) => {
    console.log(req.body);
    res.send('New Item Added');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })