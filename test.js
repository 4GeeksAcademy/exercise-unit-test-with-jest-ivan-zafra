// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});



test("Conversion de euro a dollar", function(){
   
    const { euroToDollar } = require('./app.js')

   
    const dolares = euroToDollar(2)

    const expected = 2 * 1.07; 
    
    expect(expected).toBe(dolares);

    })


test("Conversion de dolar a yen", function(){
   
    const { dollarToYen } = require('./app.js')

   
    const yenes = dollarToYen(2)

    const expected = (2 / 1.07) * 156.5;
    
    expect(expected).toBe(yenes);

    })


test("Conversion de yen a pounds", function(){
   
    const { yenToPound } = require('./app.js')

   
    const pounds = yenToPound(2)

    const expected = (2 / 156.5) * 0.87;
    
    expect(expected).toBe(pounds);

    })