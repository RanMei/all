const fs = require('fs');

module.exports = function(app,db){
  require('./api.user.js')(app,db);
  require('./api.items.js')(app,db);
  require('./api.item.js')(app,db);
  require('./api.cart.js')(app,db,fs);
};