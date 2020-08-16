// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase! Parinya");
// });

// const functions = require('firebase-functions');



// นำพารามิเตอร์ที่ส่งเขามาที่ HTTP endpoint ไป Insert เข้าไปใน 
// Realtime Database ที่ path /messages/:pushId/original
// 


const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
// app.use(bodyParser)


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));
const admin = require('firebase-admin');
const { json } = require('body-parser');
admin.initializeApp(functions.config().firebase);
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// build multiple CRUD interfaces:
app.post('/matchmac', (req, res) => {
  var clientWifi = req.body
  console.log(clientWifi);
  // for(x in clientWifi  )
  // {
  //   console.log(clientWifi[x].BSSID + "  " + clientWifi[x].level);
  // }

  admin.database().ref('/regisMac').on("value", function(data) {
    for(x in clientWifi  )
  {
    console.log(clientWifi[x].BSSID + "  " + clientWifi[x].level );
    if(data.val().includes(clientWifi[x].BSSID) && clientWifi[x].level>=-45){
      res.send(true)
      return
    }
  }
    
  res.send(false)
  return
  
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  
});
app.post('/regismac', (req, res) => {
  
  const data = req.body;
  console.log(typeof( data));
  console.log( data);
  
  
 
  admin.database().ref('/regisMac').set(data).then(snapshot => {
    res.send("Success register Mac")
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  })
  
  
});
app.put('/', (req, res) => {
  res.send('Hello PUT by noomerZx')
});
app.patch('/', (req, res) => {
  res.send('Hello PATCH by noomerZx')
});
app.delete('/removemac', (req, res) => {
  var key = req.query.item;
  admin.database().ref('/regisMac').remove()
    .then(function() {
      res.send({ status: 'ok' });
    })
    .catch(function(error) {
      console.log('Error deleting data:', error);
      res.send({ status: 'error', error: error });
    });
  
});
// Expose Express API as a single Cloud Function:
exports.checkapp = functions.https.onRequest(app);