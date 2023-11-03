
const express = require ('express');
const fs = require ('fs');


const chatapp = express();


chatapp.get('/login', (req, res) => {
  
  res.send(`
    <form action="/store-username" method="POST">
      <input type="text" name="username" placeholder="Enter your username" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

// store the username in the browser's local storage//
chatapp.post('/store-username', (req, res) => {
  const { username } = req.body;

   localStorage.setItem('username', username);

  res.redirect('/');
});


chatapp.get('/', (req, res) => {
 
  res.send(`
    <form action="/send-message" method="POST">
      <input type="text" name="message" placeholder="Enter your message" required>
      <button type="submit">Send</button>
    </form>
  `);
});


chatapp.post('/send-message', (req, res) => {
  const { message } = req.body;
  const username = req.localStorage.getItem('username');

  
  fs.appendFile('messages.txt', `"${username}": "${message}"\n`, (err) => {
    if (err) throw err;
    console.log('Message stored successfully!');
  });


  res.redirect('/');
});


chatapp.get('/messages', (req, res) => {
  
  fs.readFile('messages.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const messages = JSON.parse(data);

   
    let output = '';
    for (const username in messages) {
      output += `${username}: ${messages[username]}\n`;
    }

    res.send(output);
  });
});


chatapp.listen(3000, () => {
  console.log('Server started on port 3000');
});
