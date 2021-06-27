// [1,2] + [1]                          should return [2]
// [1,2,2,2,3] + [2]                    should return [1,3]
// [1,2,2,2,2,3] + diffArray3 = [2,3]   should return [1]

array1 = [1,2]
array2 = [1,2,2,2,2,3]
diffArray1 = [1]
diffArray2 = [2]
diffArray3 = [2,3]

function arrayDiff(a, b) {
    solutionArray = []
    a.filter((num) => {
        b.includes(num) ? null : solutionArray.push(num)
    })
    console.log(solutionArray)
    return solutionArray
}

arrayDiff(array2, diffArray3)