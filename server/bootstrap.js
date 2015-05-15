var timeBefore24Hours = Date.now() - (1000 * 60 * 60 * 24);
var selector = {lastPlayedDate: {$gt: timeBefore24Hours}};

if(!Players.findOne(selector)) {
  console.log("Inserting players...");
  for(var lc=0; lc<5000; lc++) {
    if(lc > 0 && lc % 1000 === 0) {
      console.log(" inserted:", lc);
    }

    var player = {
      lastPlayedDate: Date.now(),
      score: Math.ceil(Math.random() * 99999),
      username: "user-" + lc
    };

    Players.insert(player);
  }
}