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
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// build multiple CRUD interfaces:
app.get('/matchmac', (req, res) => {
  admin.database().ref('/regismac').on("value", function(data) {
    console.log( data.val()["0"]);
    for(x in data.val()){
      console.log(data.val()[x]);
      
    }
    res.send(data.val())
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  
});
app.post('/regismac', (req, res) => {
  
  const mac_addr = req.query.mac;
  
  // insert เข้าไปใน Realtime Database แล้วส่ง response
  admin.database().ref('/regismac').push({mac : mac_addr}).then(snapshot => {
    // รีไดเรค (ด้วย code 303)ไปที่ url ของ Firebase console เพื่อดูข้อมูลที่เพิ่มเข้าไป
    res.send("Success register Mac")
  });
  
});
app.put('/', (req, res) => {
  res.send('Hello PUT by noomerZx')
});
app.patch('/', (req, res) => {
  res.send('Hello PATCH by noomerZx')
});
app.delete('/removemac', (req, res) => {
  var key = req.query.item;
  admin.database().ref('regismac/'+key).remove()
    .then(function() {
      res.send({ status: 'ok' });
    })
    .catch(function(error) {
      console.log('Error deleting data:', error);
      res.send({ status: 'error', error: error });
    });
  res.send('Hello DELETE by noomerZx')
});
// Expose Express API as a single Cloud Function:
exports.checkapp = functions.https.onRequest(app);