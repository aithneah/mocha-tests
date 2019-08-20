const { Calculator } = require('../src/calc')

const assert = require('assert')

describe('Calculator', () => {
    it('should add numbers', () => {
        //assert.expectation(3)
        assert.equal(Calculator.add(2, 2), 4)
        // assert.equal(Calculator.add(2, 2), 5)
        // assert.equal(Calculator.add(2, 2), 6)

        // if (2 !== 3) {
        //     throw new Error('2 is not equal to 3')
        // }
    })
})