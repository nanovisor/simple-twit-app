var config = require('./config');
var Twit = require('twit');
var prompt = require('prompt');

var tw = new Twit(config);

// request prompt
prompt.start();

prompt.get(['message'], function(err, result) {
  console.log('Input received');
  postMessage(result.message);
});

// post message
function postMessage(message) {
  tw.post('statuses/update', { status: message }, showResult);
}

// show errors, logs
function showResult(err, data, response) {
  if (err) {
    console.log('Posting error: ' + err.message);
  } else {
    console.log('Success posting');
  }
}
