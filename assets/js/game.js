var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


console.log(playerName.playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    //alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight)
// if fight is chosen
 if(promptFight === "fight" || promptFight === "FIGHT"){
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
  
console.log(
    playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining "

);
 // check enemy health
 if (enemyHealth <= 0) {
    window.alert(enemyName = " has died! ");
}
else{ 
   window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;

console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " helth remaining "
);
// check player's health 
if (playerHealth <= 0) {
    window.alert(playerName + " has died! ");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left. ");
}
 }
// if player chose to skip
else if (promptFight === "skip"|| promptFight === "SKIP"){
    //confirm
var confirmSkip = window.confirm("are you sure you'd like to skip?");
// if yes, leave fight
if(confirmSkip){
    window.alert(playerName + " has chosen to skip the fight! goodbye");
    //skip penalty
    playerMoney = playerMoney - 2;
} else{
    fight();
}
}
else {
window.alert("You need to pick a valid option. Try again!'")
 }

}
fight()