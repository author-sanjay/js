const howsum=(target, numbers, memo={})=>{
    if( target in memo ) return memo[target]
if(target===0) return []
if(target<0) return null

for( let num of numbers){
    const newTarget= target - num 
    const result= howsum(newTarget, numbers, memo)
    if(result!==null){

        memo[newTarget]=[...result, num];
        return memo[newTarget];
    }
}

memo[target]=null
return null

}


console.log(howsum(7, [2,3]))
console.log(howsum(300, [7,1]))