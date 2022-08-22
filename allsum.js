const allsum=(target, number,memo={})=>{
    if(target in memo) return memo[target]
    if(target===0) return [[]]
    if(target<0) return []

    const result =[]
    for(let num of number){
        const newTarget= target-num;
        const sumways=allsum(newTarget, number,memo)
        const totalways=sumways.map(e=>[num,...e])
        result.push(...totalways)
    }

    memo[target]=result;
    return result;
}

console.log(allsum(7, [2,3]))
console.log(allsum(300, [100,25]))