const nodemailer = require('nodemailer');

module.exports = (req, res) => {
    const body = JSON.parse(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD_TOKEN
        }
      });

      let mailOptions = {
        from: body.email,
        to: process.env.RECIPIENT_EMAIL,
        subject: body.subject,
        text: body.message
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