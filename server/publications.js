Meteor.publish('leaderboard', function() {
  var timeBefore24Hours = Date.now() - (1000 * 60 * 60 * 24);
  var selector = {lastPlayedDate: {$gt: timeBefore24Hours}};
  var options = {sort: {score: -1}, limit: 10};

  var cursor = Players.find(selector, options);
  return cursor;
});