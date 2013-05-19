var deployd = require('deployd');

 
var options = {
  port:process.env.PORT || 3000,
  db:{
    port:27348,              // \
    host:"ds027348.mongolab.com", //  \ 
    name:"heroku_app15768375",      //   \
    credentials:{            //   / replace with your own settings
      username:"admin", //  /
      password:"admin"  // /
    }
  }
};
 
var dpd = deployd(options);
dpd.listen();