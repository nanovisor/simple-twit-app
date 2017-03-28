var config = require('./config');
var Twit = require('twit');
var prompt = require('prompt');

var tw = new Twit(config);

// config for searching
var params = {
  q: 'duck',
  count: 10,
  result_type: 'popular'
};

// request prompt
prompt.start();

prompt.get(['search'], function(err, result) {
  params.q = result.search;
  console.log('searching ' + result.search);
  search();
});

// send request
function search() {
  tw.get('search/tweets', params, processData);
}

// process response
function processData(err, data, res) {

  for (var i = 0; i < data.statuses.length; i++) {
    var name = data.statuses[i].user.name;
    var text = data.statuses[i].text;

    console.log(name + '\n' + text + '\n');
  }
}
