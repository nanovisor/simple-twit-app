var config = require('./config');
var Twit = require('twit');
var prompt = require('prompt');

var tw = new Twit(config);

var userPrompt;

prompt.start();

prompt.get(['message'], function(err, result) {
  userPrompt = result.message;
  console.log('Input received');
  postMessage();
});

function postMessage() {
  var twitText = {
    status: userPrompt
  };
  tw.post('statuses/update', twitText, showResult);
}

function showResult(err, data, response) {
  if (err) {
    console.log('Posting error: ' + err.message);
  } else {
    console.log('Success posting');
  }
}
