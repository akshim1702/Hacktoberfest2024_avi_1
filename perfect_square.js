/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const rootOftheN = Math.floor(Math.sqrt(n))
    const allThePerfectSqure = []
    for (let i = rootOftheN; i > 0; i--) {
        allThePerfectSqure.push(i * i)
    }
    let mainMin = Infinity
    let tempMin = Infinity
    function recursion(index, currentTotal,count) {
        currentTotal = currentTotal + allThePerfectSqure[index]
        count++
        if (currentTotal == n) {
            return count
        }
        if(currentTotal>n){
            return -1
        }
        for (let i = index; i < allThePerfectSqure.length; i++) {
            const c = recursion(i, currentTotal,count)
            if(c !== -1){
            if (tempMin >= c) {
                tempMin = c
            }
        if(tempMin !== Infinity && n > allThePerfectSqure[index]*tempMin){
                    return tempMin
            }
        }
        }
        return tempMin
    }
    for (let i = 0; i < allThePerfectSqure.length-1; i++) {
        if(mainMin !== Infinity && n > allThePerfectSqure[i]*mainMin){
            return mainMin
        }
        const c = recursion(i, 0,0)
        if (mainMin > c) {
            mainMin = c
        }
    }
    if(mainMin == Infinity){
        return n
    }
    return mainMin
};
