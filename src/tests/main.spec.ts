import myFunc from '../main'

describe('myFunc equals 25 ', () => {
    it('expect myFunc to return 25', () => {
        expect(myFunc(2)).toEqual(10)
    })
})