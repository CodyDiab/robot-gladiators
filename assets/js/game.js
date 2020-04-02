// game states
// "win"-player robot has deafeted all enemies
//  *fight all enemy robots
//  * defeat each enemy robot
//"lose"- player robot's health is zero or less







var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log( playerName + " has joined the fight ")



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;




var fight = function(enemyName) { while(enemyHealth > 0 && playerHealth > 0)
     
    
    {// ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
     
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage = randomNumber(playerAttack - 3,playerAttack);
    enemyHealth = Math.max(0,enemyHealth - damage);
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
   var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has been lost in battle ');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  
  }
  


};
//function to start new game
var startGame = function () {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
 for (var i = 0; i < enemyNames.length; i++) { 
    if (playerHealth > 0) {
        window.alert ("Welcome to Robot Gladiators! Round " 
        + ( i + 1));
     var pickedEnemyName = enemyNames[i];
    enemyHealth = randomNumber(40, 60);
    fight(pickedEnemyName);
  if (playerHealth > 0 && i < enemyNames.length -1){
    var storeConfirm = window.confirm ( "the fight is over,visit the shop before the next round?");
    if (storeConfirm){
    shop();
    }
  }
}
 else {
  window.alert("You have lost your robor in battle! Game Over");
  break;
}
}
endGame()
};
var endGame = function() {
  window.alert("The game has now ended, Let's see how you did!");
  if (playerHealth > 0){
    window.alert ("Great job, you've survived the game! You have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in batle");
  }
  var playAganConfirm = window.confirm( " Would you like to play again?");
   if (playAganConfirm) {
     startGame()
   }
   else { 
     window.alert("Thank you for playing Robot Gladiators! Come back soon!");
   }
}
var shop = function() {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice. "
  )
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
    if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
  } 
  else {
    window.alert( " You don't have enough money!")
  }
      break;
    case "upgrade":
    case "UPGRADE":
      if (playerMoney >= 7){
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      }
      else {
        window.alert( "You don;t have enough money!");
      }
      break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
}
//random number function
var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
   return value;
}

startGame()

