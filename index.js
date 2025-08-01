const http = require('http');
const express = require('express');
const RED = require('node-red');

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/api",
  userDir: "./.nodered/",
  functionGlobalContext: {},
  flowFile: 'flows.json',
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Node-RED läuft auf Port ${port}`);
});

RED.start();
