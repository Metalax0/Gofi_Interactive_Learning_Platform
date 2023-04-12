const nodemailer = require("nodemailer");

// create a nodemailer transporter object with ProtonMail SMTP settings
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "danyka.walsh74@ethereal.email",
        pass: "nkPfaj7yH7n1mwQgKJ",
    },
});

exports.sendEmail = (userName, userEmail) => {
    const message = {
        from: "GOFI Team",
        to: userEmail,
        subject: "Your GOFI account has been created",
        text:
            "Dear " +
            userName +
            ",\n\nYour GOFI account has been created.Thank you for registering.\n\nBest regards,\nThe GOFI Team",
    };

    // send the email message using the nodemailer transporter object
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log("Error occurred while sending email:", err.message);
            return;
        }
        console.log("Email sent successfully:", info.messageId);
    });
};
