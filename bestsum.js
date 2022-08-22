const bestsum=(target, numbers, memo={})=>{
if(target in memo) return memo[target]
if(target===0) return []
if(target<0) return null

let shortestsum=null
for( let num of numbers){
    const newTarget= target - num 
    const result= bestsum(newTarget, numbers,memo)
    
    if(result!==null){

       const combinations=[...result, num];

        if(shortestsum===null || combinations.length<shortestsum.length){
            shortestsum = combinations
            
        }
        
    }
}
memo[target]=shortestsum;
return shortestsum;
}


console.log(bestsum(7, [5,4,3,7]))
console.log(bestsum(100, [1,2,15,25]))