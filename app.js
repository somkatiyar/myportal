var http = require('http');
var nodemailer = require('nodemailer')

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080, ()=>{
    console.log('server started')
}); //the server object listens on port 8080

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'somjikatiyar@gmail.com',
    pass: 'snehabholi786'
  }
});

var mailOptions = {
  from: 'somjikatiyar@gmail.com',
  to: 'katiyarsom@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

var sendingMail = function() {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}


module.exports = Mail;
