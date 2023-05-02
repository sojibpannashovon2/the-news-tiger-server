const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const catagories = require('./data/catagories.json');

const news = require('./data/news.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send("Tiger is runnig");
})

app.get("/catagories", (req, res) => {
    res.send(catagories);
})


app.get("/news", (req, res) => {
    res.send(news)
})

app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedId = news.find(pd => pd._id == id)
    res.send(selectedId);
})

app.get('/catagories/:id', (req, res) => {
    // const id = req.params.id
    const id = parseInt(req.params.id)

    if (id === 0) {
        res.send(news)
    }
    else {

        const selectedId = news.filter(pd => parseInt(pd.category_id) == id)
        res.send(selectedId)
    }
    // if (id == 0) {
    //     res.send(news)
    // }
    // else {

    //     const selectedId = news.filter(pd => pd.category_id == id)
    //     res.send(selectedId)
    // }

})


app.listen(port, () => {
    console.log(`Tiger API is running on port: ${port}`);
})

