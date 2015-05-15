meteorDown.init(function(Meteor) {
  Meteor.subscribe('leaderboard', function() {
    setTimeout(function() {
      Meteor.kill();
    }, 200);
  });
});

meteorDown.run({
  concurrency: 75,
  url: "http://localhost:7878"
});