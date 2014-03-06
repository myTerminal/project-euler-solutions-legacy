var assert = require("assert");
var solution = require("./Problem089");

describe('Roman to Decimal conversion', function (){
    var convertor;

    before(function () {
	convertor = solution.RomanConvertor;
    });

    it("I should be treated as 1", function () {
	assert.equal(1, convertor.toDecimal("I"));
    });

    it("V should be treated as 5", function () {
	assert.equal(5, convertor.toDecimal("V"));
    });

    it("X should be treated as 10", function () {
	assert.equal(10, convertor.toDecimal("X"));
    });

    it("L should be treated as 50", function () {
	assert.equal(50, convertor.toDecimal("L"));
    });

    it("C should be treated as 100", function () {
	assert.equal(100, convertor.toDecimal("C"));
    });

    it("D should be treated as 500", function () {
	assert.equal(500, convertor.toDecimal("D"));
    });

    it("M should be treated as 1000", function () {
	assert.equal(1000, convertor.toDecimal("M"));
    });

    it("descending numbers should be added", function () {
	assert.equal(12, convertor.toDecimal("XII"));
    });

    it("should subtract when in ascending order", function () {
	assert.equal(4, convertor.toDecimal("IV"));
    });

    it("should subtract smaller numeral from following digit", function () {
	assert.equal(19, convertor.toDecimal("XIX"));
    });

    it("should treat subtractive pairs all over the number", function () {
	assert.equal(49, convertor.toDecimal("XLIX"));
    });
});

describe('Decimal to Roman conversion', function (){
    var convertor;

    before(function () {
	convertor = solution.RomanConvertor;
    });

    it("should consider 1 as I", function () {
	assert.equal("I", convertor.toRoman(1));
    });

    it("should consider 2 as II", function () {
	assert.equal("II", convertor.toRoman(2));
    });

    it("should consider 4 as IV", function () {
	assert.equal("IV", convertor.toRoman(4));
    });

    it("should consider 9 as IX", function () {
	assert.equal("IX", convertor.toRoman(9));
    });

    it("should consider 19 as XIX", function () {
	assert.equal("XIX", convertor.toRoman(19));
    });

    it("should consider 49 as XLIX", function () {
	assert.equal("XLIX", convertor.toRoman(49));
    });

    it("should consider 100 as C", function () {
	assert.equal("C", convertor.toRoman(100));
    });

    it("should consider 500 as D", function () {
	assert.equal("D", convertor.toRoman(500));
    });

    it("should consider 1000 as M", function () {
	assert.equal("M", convertor.toRoman(1000));
    });

    it("should consider 1606 as MDCVI", function () {
	assert.equal("MDCVI", convertor.toRoman(1606));
    });
});

describe('Optimizing Roman number representation', function () {
    var convertor;

    before(function () {
	convertor = solution.RomanConvertor;
    });

    it("should convert IIII to IV", function () {
	assert.equal("IV", convertor.optimizeRoman("IIII"));
    });

    it("should convert XIIIIII to XVI", function () {
	assert.equal("XVI", convertor.optimizeRoman("XIIIIII"));
    });

    it("should convert XVIV to XIX", function () {
	assert.equal("XIX", convertor.optimizeRoman("XVIV"));
    });

    it("should convert XXXXVIIII to XLIX", function () {
	assert.equal("XLIX", convertor.optimizeRoman("XXXXVIIII"));
    });

    it("should convert MCCCCCCVI to MDCVI", function () {
	assert.equal("MDCVI", convertor.optimizeRoman("MCCCCCCVI"));
    });
});

describe('Calculating number of characters that can be saved', function () {
    var convertor;

    before(function () {
	convertor = solution.RomanConvertor;
    });

    it("should return 0 when supplied with I", function () {
	assert.equal(0, convertor.calculateExtraCharacters("I"));
    });

    it("should return 2 when supplied with IIII", function () {
	assert.equal(2, convertor.calculateExtraCharacters("IIII"));
    });
});
