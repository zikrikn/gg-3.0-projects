const express = require('express');
const app = express();
const controller = require('./controllers/controller.js');
// Ini adalah controller langsung seperti ini, ini kaya struct,
// { controller } ini tuh emang ngirim function langsung

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Welcome to our application." });
  });

app.post("/transaction", controller.transaction);

// jalankan server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });