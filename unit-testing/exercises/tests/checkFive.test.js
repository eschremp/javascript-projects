const checkFive = require('../checkFive.js');

describe('checkFive', function() {

    test('number less than 5 return "number is less than 5."', function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    })
    test('number greater than 5 returns"number is greater than 5."', function() {
        output = checkFive(8);
        expect(output).toEqual("8 is greater than 5.");
    })
    test('number equals 5 returns "number is equal to 5."', function() {
        output = checkFive(5);
        expect(output).toEqual("5 is equal to 5."); 
    })
})