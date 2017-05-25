var fighterOne = {
	idNumber: 0,
	fighterName: "Princess Poison",
	healthPoints: 100,
	attackPower: 10,
	counterattackPower: 10,
	fighterPicture: "./assets/images/princessPoison.png"
};

var fighterTwo = {
	idNumber: 1,
	fighterName: "Duke Dynamite",
	healthPoints: 120,
	attackPower: 20,
	counterattackPower: 20,
	fighterPicture: "./assets/images/dukeDynamite.png"
};

var fighterThree = {
	idNumber: 2,
	fighterName: "Lord LaserEyes",
	healthPoints: 140,
	attackPower: 30,
	counterattackPower: 30,
	fighterPicture: "./assets/images/lordLaserEyes.png"
};

var fighterFour = {
	idNumber: 3,
	fighterName: "Empress ElectricShock",
	healthPoints: 180,
	attackPower: 40,
	counterattackPower: 40,
	fighterPicture: "./assets/images/empressElectricShock.png"
};

//set array of fighter options
var fightersArray = [fighterOne, fighterTwo, fighterThree, fighterFour];


/*JQuery-dependent function that takes in a fighter's ID number and a target div on the webpage, loading the corresponding fighter into the target div.
It also assigns the fighter's image a team id, in this case: "user" "opponent" or "null".
*/
function loadFighterProfile(fighterIdNumber, webpageTargetDiv, teamName){
		//Obtain fighter stats for user selection
		var currentFighter = fightersArray[fighterIdNumber];
		var displayFighterName = currentFighter.fighterName;
		var displayFighterHP = currentFighter.healthPoints;
		var displayFighterAttack = currentFighter.attackPower;
		var fighterDetailsImageLink = currentFighter.fighterPicture;

		//dynamically create HTML container to display the fighter's stats
		var fighterProfile = $("<div>");
		fighterProfile.addClass("col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset3 col-lg-6 col-lg-offset-3 fighter-profile")
		fighterProfile.attr("fighterIdValueNum", fighterIdNumber);

		//create a fighter image container
		var fighterImageDiv = $("<figure>");

		//create the fighter stats "Details" div.
		var fighterDetails = $("<div>");
		var fighterDetailsName = $("<div>");
		var fighterDetailsHP = $("<div>");
		var fighterDetailsAttack = $("<div>");

		fighterImageDiv.html("<img class='img-fluid JS-fighter-picture' src='" + fighterDetailsImageLink + "' value='" + currentFighter.idNumber + "'>");
		fighterProfile.append(fighterImageDiv);

		fighterDetailsName.html(displayFighterName);
		fighterDetailsHP.html("HP: " + displayFighterHP);
		fighterDetailsHP.addClass("JS-stats-HP");
		fighterDetailsHP.attr("id", teamName);
		fighterDetailsAttack.html("Attack: " + displayFighterAttack);
		fighterDetailsAttack.addClass("JS-stats-attack");
		fighterDetailsAttack.attr("id", teamName);

		fighterDetails.append(fighterDetailsName);
		fighterDetails.append(fighterDetailsHP);
		fighterDetails.append(fighterDetailsAttack);
		fighterProfile.append(fighterDetails);
		$(webpageTargetDiv).append(fighterProfile);
};

function nullUser(){
	userSelectionId = null;
	userFighter = null;
	userHPValue = null;
	userAttackValueRaise = null;
	userAttackValue = null;
};

function nullOpponent(){
	opponentId = null;
	opponentFighter = null;
	opponentHPValue = null;
	opponentCounterattackValue = null;
};

function resetPage(){
	$("#fighters-container").html("");
	$("#opponent-container").html("");
	$("#JS-battle-arena-opponent-header").html("YOUR OPPONENT &darr;");
	$("#JS-battle-arena-user-header").html("YOU &uarr;");
	$("#user-container").html("");
	$("#user-container-container").hide();
	$("#opponent-container-container").hide();
	$("#reset-btn").hide();
	$("#attack-btn").removeClass("disabled");
	$("#buttons-row").hide();
	$("#lefthand-header").html("SELECT YOUR FIGHTER");
	
	
	for (i = 0; i < fightersArray.length; i++){
		var fighterRosterDisplayDiv = $("#fighters-container");
		loadFighterProfile(i, fighterRosterDisplayDiv, "null");
	};
};