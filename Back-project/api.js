import express, { json } from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import admin from "firebase-admin";
import serviceAccount from "./keyconfig/SE_firebaseProject.json" with
{
    type: "json"
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express();
const port = 3000;
const db = admin.firestore();

//--part-1--test sever
app.get(`/`, (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

//--part-2--
app.use(bodyParser.json());
app.use(cors());

async function fetchData() {
    const result = [];
    const productRef = db.collection('product');
    const docRef = await productRef.get();
    docRef.forEach(doc => {
      result.push({
        id : doc.id,
        ...doc.data()
      });
    });
    return JSON.stringify(result);
  }
  
  app.get ('/api/getData', (req,res) => {
    res.set('content-type', 'application/json');
    fetchData().then((jsondata) => {
        res.send(jsondata);
    }).catch((error) => {
        res.send(error);
    });
  });