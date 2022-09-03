const island_count=(grid)=>{
    var count=0;
    var visited=new Set()
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(check(grid,i,j,visited)===true){
                count+=1;
            }
        }
    }
    return count
}

const check=(grid,r,c,visited)=>{
    const rowbound=((r>=0) && r<grid.length)
    const colbound=((c>=0)&& c<grid.length)
    if(!colbound || !rowbound){
        return false
    }

    if(grid[r][c]=="W"){
        return false
    }

    const pos=r+","+c
    if(visited.has(pos)){return false}
    visited.add(pos)
    check(grid,r+1,c,visited)
    check(grid,r-1,c,visited)
    check(grid,r,c-1,visited)
    check(grid,r,c+1,visited)
    

    return true
}



grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ]
  
console.log(island_count(grid))