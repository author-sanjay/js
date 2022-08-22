const allConstruct=(target, words,memo={})=>{
    if(target in memo) return memo[target]
    if(target==='') return [[]]
    
    const result=[]

    for(let word of words){
        if(target.indexOf(word)===0){
            const suffix=target.slice(word.length)
            const suffixways=allConstruct(suffix, words,memo)

            const targetways= suffixways.map(way=> [word, ...way])
            result.push(...targetways)
        }
    }

    memo[target]=result;
    return result;
}
 
 
 
 console.log(allConstruct("abcdef",["a","ab", "abc", "cd","def","abcd","cdef","ef"]))
 console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e", "eeeeee", "eeeeeeeeeeeeeee","eeeeeeeeeeeeeeeeeeeeee","eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"]))