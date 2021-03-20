function primeFactorsOf(number) {
    return factorsOf(number).filter(factor => isPrime(factor))
}

function isPrime(testedNumber) {
    if(testedNumber < 2) return false

    return factorsOf(testedNumber).length === 2
}

function factorsOf(number) {
    if(number === 1) return [1]

    const listOfFactors = [1]

    const higestPossibleFactor = Math.ceil((number + 1) / 2)

    for(let possibleFactor of numbersBetween(2, higestPossibleFactor))
    {
        if(number % possibleFactor === 0)
            listOfFactors.push(possibleFactor)
    }

    listOfFactors.push(number)

    return listOfFactors
}

function* numbersBetween(startNumber, endNumber) {
    for(let i = startNumber; i < endNumber; i++) {
        yield i;
    }
}

module.exports = {
    isPrime : isPrime,
    factorsOf: factorsOf,
    primeFactorsOf: primeFactorsOf
}