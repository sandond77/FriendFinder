var friendsData = require("../data/friends.js");

module.exports = function(app) {
  	app.get("/api/friends", function(req, res) {
    	res.json(friendsData);
  	});

	app.post("/api/friends", function(req, res) {
      	friendsData.push(req.body);
      	res.json(true);

      	var totalDifference;
      	var matchScore;
      	var matchName;
    	for (var i = 0; i < friendsData.length; i++) {
    		totalDifference = 0;
    		matchScore = -1;
    		for (var j = 0; j < friendsData[i].scores.length; j++) {
    			totalDifference += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(req.body.scores[j]));
    		}

    		if (matchScore < totalDifference && req.body.name !== friendsData[i].name) {
    			matchScore = totalDifference;
    			matchName = friendsData[i].name;
    		}
    	}

    	console.log("match", matchName)
  });
}