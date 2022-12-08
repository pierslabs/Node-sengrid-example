import dotenv from 'dotenv';
import sengrid from '@sendgrid/mail'

dotenv.config();

sengrid.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'receiver@gmail.com', // Change to your recipient
  from: 'sender@gmail.com', // Change to your verified sender
  subject: 'Hellooouu beaby',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>Prueba sengrid js</strong>',
}

sengrid.send(msg)
  .then(() => {
    console.log('Email send')
  })
  .catch((error) => {
    console.error(error)
  })
