import { Player } from "./class/player-card.js";

// initialize player 1 
const p1 = new Player('Player 1', 'male', 'player1-div', 'X');
// display the player 
p1.display();
// initialize button event listeners 
p1.change();
p1.save();

//initialize player 2 
const p2 = new Player('Player 2', 'female', 'player2-div', 'O')
// display the player
p2.display();
// initialize button event listeners 
p2.change();
p2.save();



