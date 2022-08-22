const traverller=(n,m, memo={})=>{
    const key = m+','+n
    if(key in memo) return memo[key]
    if(n===1 && m===1) return 1
    if(n===0 || m===0) return 0

    memo[key]= traverller(n-1,m, memo)+traverller(n,m-1, memo)
    return memo[key]
}

console.log(traverller(1,1))
console.log(traverller(2,3))
console.log(traverller(18,18))