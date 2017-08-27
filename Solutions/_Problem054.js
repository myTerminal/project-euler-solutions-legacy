var _ = require("underscore");
var assert = require("assert");

var Card = function (face) {
    this.value = face.substr(0,1);
    this.suit = face.substr(1);
};

function alignCards(cards) {
    _.sort(cards, function (card) { return card.value; });
}

function getCardWeight(card) {
    switch(card.value) {
	case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "10":
	    return parseInt(card.value, 10);
	case "J":
            return 11;
	case "Q":
	    return 12;
	case "K":
	    return 13;
	case "A":
	    return 14;
	default:
	    return 0;
    }
}

exports.run = function () {
    var count = 0;

    console.log("Weight: " + getCardWeight(new Card("3D")));

    console.log("count: " + count);
    return count;
};

exports.tests = function () {
    var assert = require("assert")
    describe('Array', function(){
	describe('#indexOf()', function(){
	    it('should return -1 when the value is not present', function(){
		assert.equal(-1, [1,2,3].indexOf(5));
		assert.equal(-1, [1,2,3].indexOf(0));
	    })
	})
    })
};
