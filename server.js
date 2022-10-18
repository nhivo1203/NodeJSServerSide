const https = require('https');
const fs = require('fs');
const app = require('./app');

require('dotenv').config();

const port = process.env.PORT || 8080;

const httpServer = https.createServer({
    key: fs.readFileSync(process.env.SSL_KEY),
    cert: fs.readFileSync(process.env.SSL_CERT)
}, app);

httpServer.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

