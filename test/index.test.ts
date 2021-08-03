import add from '../src/add'

describe('test add', () => {
  it('should equal 2 when add 1 and 1', () => {
    expect(add(1, 1)).toEqual(2)
  })
})
