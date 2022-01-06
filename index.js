const {BigNumber} = require("ethers");

const iterations = 10000000;
const A = BigNumber.from(2).pow(250).add('83749173926421255012')
const B = BigNumber.from(2).pow(180).add('83749173926421255012')

const startTime = new Date().getTime()
let C
for (let i=0; i<iterations; i++) {
  C = A.div(B)
}
const endTime = new Date().getTime()
console.log((endTime - startTime) / 1000, 'seconds')
