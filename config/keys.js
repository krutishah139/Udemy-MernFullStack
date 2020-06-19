//decides whether to go to dev or prod
if(process.env.NODE.ENV === 'production'){
  module.exports = require('./prod');
} else{
  module.exports = require('./dev');
}
