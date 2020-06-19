const add = require('../src/add.js');
const expect = require('chai').expect;

describe('add function test', function() {
	it ('1 + 1 = 2', function() {
		expect(add(1, 1)).to.be.equal(2);
	});

	it ('100 + 1000', function() {
		// to.equal 等同于 to.be.equal
		expect(add(100, 1000)).to.equal(1100);
	});
});