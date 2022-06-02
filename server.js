import express from 'express';
import mongoose from 'mongoose';
import cards from './dbCards';

//app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://melkam:melkam@cluster0.r80todk.mongodb.net/?retryWrites=true&w=majority';

//middleware

//db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//api endpoints
app.get('/', (req, res) => res.status(200).send("HELLO DOPE!"));

app.post('/cards', (req, res) => {
    const dbCard = req.body;

    cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

app.get('/cards', (req, res) => {
    cards.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

//listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));