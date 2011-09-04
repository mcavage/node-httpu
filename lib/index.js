// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.



if (/v0.4/.test(process.version)) {
  module.exports = require('./httpu');
} else {
  module.exports = require('http');
}
