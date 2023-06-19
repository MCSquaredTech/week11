import { Card } from "./card.js";
import { GameScore } from "./game-scores.js"
import { Tiles } from "../class/tiles.js";



export class GameBoard { 
    constructor() {
        this.p1 = new Card('p1', 'Player 1', './imgs/man.png', 'Player X', '#player1-div');
        this.p2 = new Card('p2','Player 2', './imgs/woman.png', 'Player O', '#player2-div');
        this.gs = new GameScore('#score-board');
        this.game = new Tiles(this.p1, this.p2)
    }

    initGamePlay() { 
        this.p1.display();
        this.p2.display(); 
        this.gs.display();

        this.game.appendToElement($('.play-space'))
        this.game.initBoard(); 
    }

}



