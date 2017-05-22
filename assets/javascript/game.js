var fighterOne = {
	idNumber: 0,
	fighterName: "Princess Poison",
	healthPoints: 100,
	attackPower: 10,
	counterattackPower: 11,
	fighterPicture: "http://www.lorempixel.com/150/150/abstract"
};

var fighterTwo = {
	idNumber: 1,
	fighterName: "Duke Dynamite",
	healthPoints: 120,
	attackPower: 20,
	counterattackPower: 12,
	fighterPicture: "http://www.lorempixel.com/150/150/people"
};

var fighterThree = {
	idNumber: 2,
	fighterName: "Lord LaserEyes",
	healthPoints: 140,
	attackPower: 30,
	counterattackPower: 13,
	fighterPicture: "http://www.lorempixel.com/150/150/food"
};

var fighterFour = {
	idNumber: 3,
	fighterName: "Empress ElectricShock",
	healthPoints: 180,
	attackPower: 40,
	counterattackPower: 14,
	fighterPicture: "http://www.lorempixel.com/150/150/city"
};

//set array of fighter options
var fightersArray = [fighterOne, fighterTwo, fighterThree, fighterFour];

//JQuery-dependent function that iterates through fightersArray and appends it to the "fighters-container" already baked into our Bootstrap-powered HTML
function loadFightersSection(){
		for (i = 0; i < fightersArray.length; i++){
		
		//Obtain fighter stats from each fighter in our game.js file
		var currentFighter = fightersArray[i];
		var displayFighterName = currentFighter.fighterName;
		var displayFighterHP = currentFighter.healthPoints;
		var displayFighterAttack = currentFighter.attackPower;
		var fighterDetailsImageLink = currentFighter.fighterPicture;

		//dynamically create an HTML container to display each fighter's stats
		var fighterProfile = $("<div>");
		fighterProfile.addClass("col-xs-12 col-sm-6 col-md-6 col-lg-6");
		fighterProfile.attr("idNumberValue", i);

		//create a fighter image container
		var fighterImageDiv = $("<figure>");

		//create the fighter stats "Details" dropdown div.
		var fighterDetails = $("<div>");
		var fighterDetailsName = $("<div>");
		var fighterDetailsHP = $("<div>");
		var fighterDetailsAttack = $("<div>");

		fighterImageDiv.html("<img class='img-fluid JS-fighter-picture' src='" + fighterDetailsImageLink + "' value='" + currentFighter.idNumber + "'>");
		fighterProfile.append(fighterImageDiv);

		fighterDetailsName.html("Name: " + displayFighterName);
		fighterDetailsHP.html("HP: " + displayFighterHP);
		fighterDetailsAttack.html("Attack: " + displayFighterAttack);

		fighterDetails.append(fighterDetailsName);
		fighterDetails.append(fighterDetailsHP);
		fighterDetails.append(fighterDetailsAttack);
		fighterProfile.append(fighterDetails);
		$("#fighters-container").append(fighterProfile);
		}
};

//function takes in a fighter's ID number and a target div on the webpage, loading the corresponding fighter into the target div
function loadUserSelection(userSelectionIdNumber, webpageTargetDiv){
		//Obtain fighter stats for user selection
		var currentFighter = fightersArray[userSelectionIdNumber];
		var displayFighterName = currentFighter.fighterName;
		var displayFighterHP = currentFighter.healthPoints;
		var displayFighterAttack = currentFighter.attackPower;
		var fighterDetailsImageLink = currentFighter.fighterPicture;

		//dynamically HTML container to display the fighter's stats
		var fighterProfile = $("<div>");
		fighterProfile.addClass("col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1");
		fighterProfile.attr("idNumberValue", i);

		//create a fighter image container
		var fighterImageDiv = $("<figure>");

		//create the fighter stats "Details" div.
		var fighterDetails = $("<div>");
		var fighterDetailsName = $("<div>");
		var fighterDetailsHP = $("<div>");
		var fighterDetailsAttack = $("<div>");

		fighterImageDiv.html("<img class='img-fluid JS-fighter-picture' src='" + fighterDetailsImageLink + "' value='" + currentFighter.idNumber + "'>");
		fighterProfile.append(fighterImageDiv);

		fighterDetailsName.html("Name: " + displayFighterName);
		fighterDetailsHP.html("HP: " + displayFighterHP);
		fighterDetailsAttack.html("Attack: " + displayFighterAttack);

		fighterDetails.append(fighterDetailsName);
		fighterDetails.append(fighterDetailsHP);
		fighterDetails.append(fighterDetailsAttack);
		fighterProfile.append(fighterDetails);
		$(webpageTargetDiv).append(fighterProfile);
};