import { BaseElement } from './base-element.js';
import { Tile } from './tile.js';
import { Winner } from './winner.js';
import { GameScore } from '../components/game-scores.js';
import { ScoreBoard } from './score-board.js';
import { TieGame } from './tie.js';

export class Tiles extends BaseElement{ 
    constructor(p1, p2) {
        super();
        this.player1 = p1;
        this.player2 = p2;
        this.move = 0;
        this.gameStatus = 'inPlay';
        this.tiles = [];
        this.tileArray = [];
        this.score = new GameScore('#score-board');
        this.tie;
        this.win;
        this.winner = [[0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6]];
    }

    getElementString() {
        return `
        <div id="winner"></div>
        <div class="col-sm-12 align-self-center">
            <div class="row justify-content-center">
                <div class="box box-left box-top"></div>
                <div class="box box-top"></div>
                <div class="box box-right box-top"></div>
            </div>

            <div class="row justify-content-center">
                <div class="box box-left"></div>
                <div class="box"></div>
                <div class="box box-right"></div>
            </div>

            <div class="row justify-content-center">
                <div class="box box-left box-bottom"></div>
                <div class="box box-bottom"></div>
                <div class="box box-right box-bottom"></div>
            </div>
            <br>
            <button class="btn btn-success btn-reset">Reset Game</button>
        </div>
        `
    }

    

    initBoard() {
        this.tiles = Array.from($('.box'));
        let p = this.player1;
        p.p.highlight();
        this.tiles.forEach((tile, index) => {
            this.tileArray.push(new Tile(tile, index, 'empty', ''))
            tile.addEventListener('click', () => {
                if (this.tileArray[index].state !== "Played") { 
                    if (this.gameStatus !== "GameOver") {
                        console.log(this.gameStatus)
                        tile.innerText = p.p.xo;
                        this.tileArray[index].value = p.p.xo;
                        this.tileArray[index].state = "Played";
                        this.move++;
                        this.checkForWinner(p);
                        p.p.normal();
                        p = p === this.player1 ? this.player2 : this.player1;
                        p.p.highlight(); 
                    }

                } else { 
                    alert('The space is not free to play!');
                }
                
            });
        });
        $('.btn-reset').on('click', () => this.resetBoard())
        this.win = new Winner();
        this.tie = new TieGame
        
    }

    resetBoard() { 
        this.move = 0;
        this.gameStatus = "inPlay";
        $('.play-space').empty();
        this.appendToElement($('.play-space'));
        console.log('Draw Board');
        this.tileArray.forEach((tile, index, state, value) => {
            this.tileArray[index].state = 'empty'; 
            this.tileArray[index].value = '';
        });
        this.player1.p.highlight();
        this.player2.p.normal();
        this.initBoard();        
    }

    checkForWinner(p) { 
        if (this.move > 4 && this.gameStatus === 'inPlay') { 
            this.winner.forEach((win) => { 
                // get values of board cells 
                const a = this.tileArray[win[0]];
                const b = this.tileArray[win[1]];
                const c = this.tileArray[win[2]];

                if (a.state !== 'empty') {
                    if (a.value === b.value && b.value === c.value) {
                        // set game we have a winner
                        this.gameStatus = "GameOver"
                        this.win.p = p; 
                        p.title === 'Player X' ? this.score.sc.p1Wins = 1 : this.score.sc.p2Wins = 1; 
                        this.score.display();
                        $('#winner').empty();
                        this.win.appendToElement($('#winner'));  
                                              
                    } else if (this.move === 9){
                        if (this.gameStatus !== 'GameOver') {
                            // set game over tie
                            this.gameStatus = "GameOver" 
                            this.score.sc.tieGame = 1;
                            this.score.display();
                            $('#winner').empty();
                            this.tie.appendToElement($('#winner'));
                            
                        }
                    }
                }
                
            });   
        } 
    }
}
