// import { Card } from './class/card.js'; 

// let p1 = new Card('Player 1', './img/man.png', 'Player X', '.p1card');
// p1.display();

// let p2 = new Card('Player 2', './img/woman.png', 'Player O', '.p2card');
// p2.display();


let winner = [[0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6]]
let board = ['X', 'O', 'X', 'O', 'X', '', 'O', '', 'X']

winner.forEach((winner) => { 

    const a = board[winner[0]];
    const b = board[winner[1]];
    const c = board[winner[2]];

    if (a === b && b === c) { 
        console.log('We have a Winner!');
    }
    
    console.log(a);
    console.log(a, b, c);
})