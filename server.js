const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

const port = process.env.PORT || 8088;
const app = express();

// Certificate
// const privateKey = fs.readFileSync('/etc/letsencrypt/live//privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live//cert.pem', 'utf8');
// const ca = fs.readFileSync('/etc/letsencrypt/live//chain.pem', 'utf8');

const credentials = {
  // key: privateKey,
  // cert: certificate,
  // ca: ca
};

// the __dirname is the current directory from where the script is running
app.use(express.static(`${__dirname}/dist`));

// send the user to index html page in spite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const server = https.createServer(credentials, app)

server.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
});
