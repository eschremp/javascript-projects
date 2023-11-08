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
  test('When passed a number that is only divisible by 2', () => {
    expect(launchcode.launchOutput(2)).toBe('Launch!')
  })
  test('When passed a number that is only divisible by 3', () => {
    expect(launchcode.launchOutput(3)).toBe('Code!')
  })
  test('When passed a number that is only divisible by 5', () => {
    expect(launchcode.launchOutput(25)).toBe('Rocks!')
  })
  test('When passed a number divisible by 2 and 3', () => {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!')
  })
  test('When passed a number divisible by 3 and 5', () => {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!')
  })
  test('When passed a number divisible by 2 and 5', () => {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (Crash!!!!)')
  })
  test('When passed a number divisible by 2, 3, and 5', () => {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!')
  })
  test('When passed a number NOT divisible by 2, 3, and 5', () => {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.")
  })
})