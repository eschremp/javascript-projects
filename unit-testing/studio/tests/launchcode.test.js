// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test('value of "organization" is "nonprofit', () => {
    expect(launchcode.organization).toBe('nonprofit');
  })
  test('value of "executiveDirector" is "Jeff"', () => {
    expect(launchcode.executiveDirector).toBe('Jeff');
  })
  test('value of "percentageCoolEmployees" is 100' , () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })
  test('value of "programsOffered" is an array', () => {
    expect(launchcode.programsOffered).toContain('Web Development');
    expect(launchcode.programsOffered).toContain('Data Analysis');
    expect(launchcode.programsOffered).toContain('Liftoff');
    expect(launchcode.programsOffered.length).toEqual(3);
  })
  
});

describe('launchOutput', () => {
  
})