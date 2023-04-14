const cloneArray = require('./cloneArray');

test("porperly clones array", ()=>{
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array);
})