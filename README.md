 sengrid-example 

- Create your sengrid account.
- Generate key in Sengrid.
- Copy example.env  and rename to .env  
- Config your apikey in .env file.

```bash
npm i
```
- Config msg object
```js
const msg = {
  to: 'receiver@gmail.com', // Change to your recipient
  from: 'sender@gmail.com', // Change to your verified sender
  subject: 'Hellooouu beaby',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>Prueba sengrid js</strong>',
}
```

```bash
npm start
```
