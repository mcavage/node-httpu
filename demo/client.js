// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
var httpu = require('httpu');

var options = {
  socketPath: '/tmp/httpu-sock',
  path: '/index.html'
};

var req = httpu.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
