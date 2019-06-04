const mod1 = require('./mod1')

describe('simple test suit', () => {
    test('sum', () => {
        expect(mod1.sum(1,2)).toBe(3)
    })
})
