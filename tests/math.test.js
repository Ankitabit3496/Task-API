const {calculateTip} = require('../src/math')

test('should calculate total with tip',()=>{
 const total = calculateTip(10, .3)
 expect(total).toBe(13)

})

test('async test demo', (done)=>{
    setTimeout(()=>{
        expect(1).toBe(2)
        done()
    },2000)
})

//////////////////