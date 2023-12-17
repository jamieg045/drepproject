const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

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

main().catch(err => console.log(err));


async function main()
{
    await mongoose.connect('mongodb+srv://jamieg045:090599@datarepcluster.qykyrhm.mongodb.net/');
}

const itemSchema = new mongoose.Schema(
    {
        title: String,
        label: String,
        price: String
    }
);

const itemModel = mongoose.model('items', itemSchema);

app.get('/api/items', async (req, res) => {
    let items = await itemModel.find({});
    console.log(items);
    res.json(items);
})

app.post('/api/items', (req, res) => {
    console.log(req.body);

    itemModel.create({
        title: req.body.title,
        label: req.body.label,
        price: req.body.price
    }).then(() => { res.send('Item recieved'); })
    .catch(() => { res.send ('Item not recieved'); })
})

app.get('/api/items/:id', async (req, res) =>
{
    console.log(req.params.id);
    let item = await itemModel.findById({_id:req.params.id});
    res.send(item);
})

app.put('/api/items/:id', async (req, res) => {
    console.log("Updated: "+req.params.id);

    let item = await itemModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true})

        res.send(item);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })