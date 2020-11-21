const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const app = express();
const port = process.env.PORT || 3000;
app.use(serveStatic(path.join(__dirname, 'public')));
app.listen(port,  function () {
    console.log('listening on port:', port);
});