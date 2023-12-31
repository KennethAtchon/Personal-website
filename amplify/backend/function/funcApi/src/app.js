/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/client', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/client/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/client', async function(req, res) {
  // Add your code here
  let data = req.body;

      let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'bugtracker89@hotmail.com', 
          pass: 'itbebugging78', 
        },
        tls:{
            rejectUnauthorized: false,
        }
    });


    try{

    let info = await transporter.sendMail({
       from: 'bugtracker89@hotmail.com', // sender address
        to: ``, // list of receivers
        subject: "Personal Website Contact Info", // Subject line
        text: `Someone sent you a message!`, // plain text body
        html: `
        <br> You got a message from ${data.items[0]}. Their email is ${data.items[1]}</br>
        <b>It says ${data.items[2]}</b>`, // html body
    })
    
    console.log("success");

    transporter.close();

    res.json({success: `Success! ${info.messageId}`, url: req.url, body: req.body});

    }catch(e){
        console.log(e);

        res.json({success: `Failed state: : ${e}`, url: req.url, body: req.body});

        transporter.close();
    }

});

app.post('/client/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/client', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})

});

app.put('/client/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})

});

/****************************
* Example delete method *
****************************/

app.delete('/client', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/client/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
