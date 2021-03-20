import {isPrime, factorsOf, primeFactorsOf} from './primeFactors'

test.each`
    testedNumber   | testedNumberIsPrime
    ${2}    | ${true}
    ${3}    | ${true}
    ${4}    | ${false}
    ${100}  | ${false}
    ${541}  | ${true}
    ${1}    | ${false}
    ${0}    | ${false}
    `('isPrime $testedNumber returns $testedNumberIsPrime', ({ testedNumber, testedNumberIsPrime }) => {
    expect(isPrime(testedNumber)).toEqual(testedNumberIsPrime)
})

test.each`
    number  | factors
    ${2}    | ${[1, 2]}
    ${3}    | ${[1, 3]}
    ${4}    | ${[1, 2, 4]}
    ${100}  | ${[1, 2, 4, 5, 10, 20, 25, 50, 100]}
    ${541}  | ${[1, 541]}
    ${1}    | ${[1]}
    `('factors of $number returns $factors', ({ number, factors }) => {
    expect(factorsOf(number)).toEqual(factors)
})

test.each`
    number  | primeFactors
    ${2}    | ${[2]}
    ${3}    | ${[3]}
    ${4}    | ${[2]}
    ${100}  | ${[2, 5]}
    ${541}  | ${[541]}
    ${1}    | ${[]}
    ${60}    | ${[2, 3, 5]}
    ${678923}    | ${[7, 96989]}
    `('prime factors of $number returns $primeFactors', ({ number, primeFactors }) => {
    expect(primeFactorsOf(number)).toEqual(primeFactors)
})
