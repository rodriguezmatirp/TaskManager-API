const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tarunpritamvrs@gmail.com',
        subject: 'Thank you For Joining Us !',
        text: 'Welcome to the app , ' + name + '.Let me know how you get along with the app.'
    })
}

const deletedUserMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tarunpritamvrs@gmail.com',
        subject: 'Can you provide us Feedback ? ',
        text: 'Hello ' + name + ',Drop us some information for deleting the account.'
    })
}

module.exports = {
    sendWelcomeMail,
    deletedUserMail
}