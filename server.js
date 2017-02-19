const express = require('express'),
      path = require('path'),
      app = express(),
      http = require('http').Server(app);

app.use(express.static(path.join(__dirname, 'src')));

app.all('*', function(req, res) {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
