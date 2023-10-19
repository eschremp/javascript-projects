const whoWon = require('../RPS.js');

describe('whoWon', function(){
    test('players tie return "TIE!', function(){
        let output = whoWon('rock', 'rock');
        expect(output).toEqual("TIE!")
    })
    test('player 1 is rock player 2 is paper return "Player 2 wins!"', function(){
        output = whoWon('rock','paper');
        expect(output).toEqual('Player 2 wins!');
    })
    test('player 1 is paper player 2 is scissors return "Player 2 wins!"', function(){
        output = whoWon('paper','scissors');
        expect(output).toEqual('Player 2 wins!');
    })
    test('player 1 is scissors player 2 is rock return "Player 2 wins!"', function(){
        output = whoWon('scissors','rock');
        expect(output).toEqual('Player 2 wins!');
    })
    test('player 1 is rock player 2 is scissors return "Player 1 wins!', function(){
        output = whoWon('rock', 'scissors');
        expect(output).toEqual('Player 1 wins!');
    })
    test('player 1 entry is invalid return "Player 2 wins!"', function(){
        output = whoWon(3, 'rock');
        expect(output).toEqual('Player 2 wins!');
    })
})
