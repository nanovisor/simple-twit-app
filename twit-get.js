var config = require('./config');
var Twit = require('twit');
var prompt = require('prompt');

var tw = new Twit(config);

var params = {
  q: 'duck',
  count: 10,
  result_type: 'popular'
};

tw.get('search/tweets', params, gotData);

function gotData(err, data, res) {
  var statuses = data.statuses;

  for (var i = 0; i < statuses.length; i++) {
    console.log(statuses[i].user.name + '\n' + statuses[i].text + '\n');
  }
}
