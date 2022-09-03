const bestcoincombo=(target, numbers)=>{
if(target===0) return [];
if(target<0) return null;

let shortestsum=null
for( let num of numbers){
    const newTarget= target - num 
    const result= bestcoincombo(newTarget, numbers)
    
    if(result!==null){
4
       const combinations=[...result,num]
       if(shortestsum===null||combinations.length<shortestsum.length){
        shortestsum=combinations;
       }
        
    }
}

return shortestsum.length;
}


console.log(bestcoincombo(11, [1,2,5]))
console.log(bestcoincombo(100, [1,2,15,25]))