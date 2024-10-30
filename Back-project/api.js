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

app.use(bodyParser.json());
app.use(cors());
//--part-1--test sever
app.get(`/`, (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

//--part-2--Sigup
async function addUser(tmpUserData) {
  const userRef = db.collection('users').doc();
  const docRef = db.collection('users').doc(userRef.id);
  let tmpObj = {
    uid: userRef.id,
    active: false,
    email: tmpUserData.email,
    fname: tmpUserData.fname,
    lname: tmpUserData.lname,
    password: tmpUserData.password,
    role: "user"
  };
  await docRef.set(tmpObj);
  console.log('user added.');
}

app.post('/api/addUser', (req, res) => {
  const { email, fname, lname, password } = req.body;
  const tmpData = { email, fname, lname, password };
  addUser(tmpData);
  res.status(200).json({ message: '[INFO] Add new pet successfully.' });
})

async function addAccount(tmpUserData) {
  const userRef = db.collection('users').doc();
  const docRef = db.collection('users').doc(userRef.id);
  let tmpObj = {
    uid: userRef.id,
    active: false,
    email: tmpUserData.email,
    fname: tmpUserData.fname,
    lname: tmpUserData.lname,
    password: tmpUserData.password,
    role: tmpUserData.role
  };
  await docRef.set(tmpObj);
  console.log('user added.');
}

app.post('/api/addAccount', (req, res) => {
  const { email, fname, lname, password ,role} = req.body;
  const tmpData = { email, fname, lname, password ,role};
  addAccount(tmpData);
  res.status(200).json({ message: '[INFO] Add new pet successfully.' });
})

//--past-3-login


async function chackLogin(loginData) {
  const result = []
  const usersRef = db.collection('users')
    .where("email", "==", loginData.userEmail)
    .where("password", "==", loginData.userPasswd);
  const docRef = await usersRef.get();

  if (!docRef.empty) {
    docRef.forEach(doc => {
      result.push({
        uid: doc.id,
        islogin: true,
        ...doc.data()
      });
    });
  } else {
    result.push({
      islogin: false,
    })
  }
  //console.log(result);
  return JSON.stringify(result[0]);
}

app.post('/api/accountLogin', (req, res) => {
  const { userEmail, userPasswd } = req.body;
  const myForm = { userEmail, userPasswd };

  res.set('Content-type', 'application/json');
  //console.log(myForm);
  chackLogin(myForm).then((jsonData) => {
    res.send(jsonData);
  }).catch((error) => {
    res.send(error);
  });
});

//--past-4-product
async function fetchData() {
  const result = [];
  const productRef = db.collection('product');
  const docRef = await productRef.get();
  docRef.forEach(doc => {
    result.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return JSON.stringify(result);
}

app.get('/api/getProduct', (req, res) => {
  res.set('Content-type', 'application/json');
  fetchData().then((jsondata) => {
    res.send(jsondata);
  }).catch((error) => {
    res.send(error);
  });
});