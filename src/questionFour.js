
function doesTheStringMeetSomeCondition(someString){
    if(typeof(someString) !== 'string')
        return false

    let tempString = ""
    for(let i = someString.length - 1; i >= 0; i--){
        tempString += someString[i]
    }

    if(tempString === someString)
        return true
    else
        return false
}

/*
* 1) For two points, describe when this function will return true
* 2) For one point, describe when this function will return false
* 3) For an extra point, suggest improvements to the function
*/





























module.exports = doesTheStringMeetSomeCondition