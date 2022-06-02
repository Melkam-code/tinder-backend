import express from 'express';
import mongoose from 'mongoose';

//app config
const app = express();
const port = process.env.PORT || 8001;
//middleware

//db config

//api endpoints
app.get('/', (req, res) => res.status(200).send("HELLO DOPE!"));

//listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));