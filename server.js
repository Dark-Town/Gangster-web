const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., Gmail, Yahoo)
    auth: {
        user: 'thelastcroneb@gmail.com', // Your email
        pass: 'Tcroneb/2025' // Your email password or app password
    }
});

// Endpoint to handle form submission
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'thelastcroneb@gmail.com', // Your email where you want to receive messages
        subject: New message from ${name},
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});￼Enter
