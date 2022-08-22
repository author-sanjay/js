const canSum=(target, numbers, memo = {})=>{
    if( target in memo) return memo[target];
    if(target==0) return true;
    if(target<0) return false;

    for( let n of numbers ){
        const newTarget = target-n;
        if(canSum(newTarget, numbers, memo)===true){
            memo[newTarget]= true;
            return true
        }

    }
    memo[target]= false;
    return false;
}



console.log(canSum(300, [7,14]))