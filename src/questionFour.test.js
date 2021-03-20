import questionFour from './questionFour'
test.each`
    inputWord   | expectedResult
    ${"test"}   | ${false}
    ${"chicken"}    | ${false}
    ${"redrumsirismurder"}   | ${true}
    ${""} | ${true}
    ${undefined} | ${false}
    ${null} | ${false}
    ${[]} | ${false}
    ${null} | ${false}
    `('$inputWord returns $expectedResult', ({ inputWord, expectedResult }) => {
        expect(questionFour(inputWord)).toBe(expectedResult)
})
