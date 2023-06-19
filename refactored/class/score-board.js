"use strict";
import { BaseElement } from "./base-element.js";

export class ScoreBoard extends BaseElement { 
    constructor() {
        super(); 
        this.player1Wins = 0;
        this.player2Wins = 0; 
        this.ties = 0; 

    }

    get p1Wins() { 
        return this.player1Wins;
    }
    set p1Wins(value) { 
        this.player1Wins += 1; 
    }
    get p2Wins() {
        return this.player2Wins;
    }
    set p2Wins(value) { 
        this.player2Wins += 1;
    }
    get tieGame() { 
        return this.ties;
    }
    set tieGame(value) {
        this.ties += 1;
    }

    getElementString() {
        return `
        <h2>Score Board Card</h2>
        <div class="row">
            <div class="col-sm-4 sb-title">Wins</div>
            <div class="col-sm-4 sb-title">Ties</div>
            <div class="col-sm-4 sb-title">Wins</div>
        </div>
        <div class="row">
            <div class="col-sm-4 sb-title playerX">${this.p1Wins}</div>
            <div class="col-sm-4 sb-title ties">${this.tieGame}</div>
            <div class="col-sm-4 sb-title playerO">${this.p2Wins}</div>
        </div>
        <div class="row winner></div>
        `
    }
}
