import questionThree from './questionThree'
test.each`
    number  | expectedNumber
    ${1}    | ${1}
    ${2}    | ${2}
    ${10}   | ${10}
    ${1000} | ${1000}
    `('$number returns $expectedNumber', ({ number, expectedNumber }) => {
        let someNumber = number

        questionThree(someNumber)

        expect(someNumber).toBe(expectedNumber)
})
