const nodemailer = require('nodemailer');

module.exports = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dechavesalex@gmail.com',
          pass: 'jskijoxfjesinysi'
        }
      });
      
      let mailOptions = {
        from: 'alex@testing123.com',
        to: 'adechaves@mux.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sent: ' + info.response);
        }
      });
}