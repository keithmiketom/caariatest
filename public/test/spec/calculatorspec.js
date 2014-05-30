

//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=//
//           jasmine tests            //
//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=//

describe ("Jasmine tests for calculator", function() {

//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=//
//           Addittion                //
//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=//
    
	it("1+1 should be 2", function() {
        expect (Calculator.AddTwoNumbers(1,1)).toBe(2);

    })
	
	it("4+4 should be 8", function() {
        expect (Calculator.AddTwoNumbers(4,4)).toBeGreaterThan(7);

    })
	
	 it("1 + string should error", function() {

        expect (function() {Calculator.AddTwoNumbers(1,"abcdef")}).toThrow(new Error("Not a number"));
    })
	
	 it("string + 1 should error", function() {

        expect (function() {Calculator.AddTwoNumbers("abcdef", 1)}).toThrow(new Error("Not a number"));
    })
	
	 it("string + string should error", function() {

        expect (function() {Calculator.AddTwoNumbers("abcdef", "abcdef")}).toThrow(new Error("Not a number"));
    })
	
	it("Test first number is out of range when adding two numbers together", function() {

        expect (function() {Calculator.AddTwoNumbers("500000000000", "1")}).toThrow(new Error("First number is out of range"));
    })
	
	it("Test second number is out of range when adding two numbers together", function() {

        expect (function() {Calculator.AddTwoNumbers("1", "500000000000")}).toThrow(new Error("Second number is out of range"));
    })
    
	
//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=//
//           Subtraction                //
//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=//
	
	it("4-5 should be -1", function() {
        expect (Calculator.MinusTwoNumbers(4,5)).toBe(-1);

    })
    
    it("5-10 should be -5", function() {
        expect (Calculator.MinusTwoNumbers(5,10)).toBeLessThan(-4);

    })
	
	 it("3 - string should  error", function() {

        expect (function() {Calculator.MinusTwoNumbers(3,"abcdef")}).toThrow(new Error("Not a number"));
    })
	
	 it("string - 1 should  error", function() {

        expect (function() {Calculator.MinusTwoNumbers("abcdef", 1)}).toThrow(new Error("Not a number"));
    })
	
	 it("string - string should  error", function() {

        expect (function() {Calculator.MinusTwoNumbers("abcdef", "abcdef")}).toThrow(new Error("Not a number"));
    })
	
	it("Test first number is out of range when subtracting", function() {

        expect (function() {Calculator.MinusTwoNumbers("500000000000", "1")}).toThrow(new Error("First number is out of range"));
    })
	
	it("Test second number is out of range when subtracting", function() {

        expect (function() {Calculator.MinusTwoNumbers("1", "500000000000")}).toThrow(new Error("Second number is out of range"));
    })
	
//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=//
//           Multiplicatio            //
//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=//
	
	it("5*6 is 30", function() {
        expect (Calculator.MulTwoNumbers(5,6)).toBe(30);

    })
    
    it("2*2 is 4", function() {
        expect (Calculator.MulTwoNumbers(2,2)).toBeGreaterThan(3);

    })
	
	it("2*2 is 4", function() {
        expect (Calculator.MulTwoNumbers(2,2)).toBeLessThan(5);

    })
	
	 it("7 * string should  error", function() {

        expect (function() {Calculator.MulTwoNumbers(7,"abcdef")}).toThrow(new Error("Not a number"));
    })
	
	 it("string * 5 should  error", function() {

        expect (function() {Calculator.MulTwoNumbers("abcdef", 5)}).toThrow(new Error("Not a number"));
    })
	
	 it("string * string should  error", function() {

        expect (function() {Calculator.MulTwoNumbers("abcdef", "abcdef")}).toThrow(new Error("Not a number"));
    })
	
	it("Test first number is out of range when multiplying", function() {

        expect (function() {Calculator.MulTwoNumbers("200000000000", "2")}).toThrow(new Error("First number is out of range"));
    })
	
	it("Test second number is out of range when multiplying", function() {

        expect (function() {Calculator.MulTwoNumbers("2", "200000000000")}).toThrow(new Error("Second number is out of range"));
    })
	
//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=//
//           Division                //
//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=//	

	it("30/5 should be 6", function() {
        expect (Calculator.DivideTwoNumbers(30,5)).toBe(6);

    })
    
    it("30/5 should be  6", function() {
        expect (Calculator.DivideTwoNumbers(30,5)).toBeGreaterThan(5);

    })
	
	 it("7 / string should be an error", function() {

        expect (function() {Calculator.DivideTwoNumbers(7,"abcdef")}).toThrow(new Error("Not a number"));
    })
	
	 it("string / 5 should  error", function() {

        expect (function() {Calculator.DivideTwoNumbers("abcdef", 5)}).toThrow(new Error("Not a number"));
    })
	
	 it("string / string should  error", function() {

        expect (function() {Calculator.DivideTwoNumbers("abcdef", "abcdef")}).toThrow(new Error("Not a number"));
    })
	
	it("Nothing can be divided by 0", function() {

        expect (function() {Calculator.DivideTwoNumbers("5", "0")}).toThrow(new Error("Can't be divided by 0"));
    })
	
	it("Test first number is out of range when dividing", function() {

        expect (function() {Calculator.DivideTwoNumbers("200000000000", "2")}).toThrow(new Error("First number is out of range"));
    })
	
	it("Test second number is out of range when dividing", function() {

        expect (function() {Calculator.DivideTwoNumbers("2", "200000000000")}).toThrow(new Error("Second number is out of range"));
    })
	
})


