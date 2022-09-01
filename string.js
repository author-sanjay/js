const rec=(n)=>{
    
let len=n.length

        for(let i=0;i<len;){
            if(n[i]==n[i+1]){
                if(i!==0){
                n = n.slice(0, i) + n.slice(i+2,n.length);   
                console.log(n)
                i=0;
                len=n.length
            }
                
                else{
                    n=n.slice(i+2,n.length)
                    console.log(n)
                    i=0;
                    len=n.length
                }
            }
            else{
                i++
            }
        }
    

        if(n!==null){
            return n;
        }else{
            return " "
        }
}

console.log(rec("aabaabzzaa"))