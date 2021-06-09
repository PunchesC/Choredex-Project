import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message:"Hello"});
});


export default functions.https.onRequest(app);