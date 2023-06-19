import { ScoreBoard } from "../class/score-board.js";

export class GameScore { 
    constructor(element) { 
        this.element = element;

        this.sc = new ScoreBoard()
    }

    display() { 
        $(this.element).empty(); 
        this.sc.appendToElement($(this.element)); 
    }
}