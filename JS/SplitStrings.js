string1 = 'abc' // should return ['ab', 'c_']
string2 = 'abcdef' // should return ['ab', 'cd', 'ef']



function solution(str){
    splitString = []
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i+1)) {
            splitString.push(str.charAt(i) + str.charAt(i+1))
            i++
        }
        else {
            splitString.push(str.charAt(i) + '_')
        }
    }
    console.log(splitString)
    return splitString
}

solution(string2)