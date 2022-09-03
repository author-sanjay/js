const island_count=(grid)=>{
    var minsize=Infinity;
    var visited=new Set()
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            var size=check(grid,i,j,visited)
                if(size>0 &&size<minsize){
                    minsize=size
                }
            
        }
    }
    return minsize
}

const check=(grid,r,c,visited)=>{
    const rowbound=((r>=0) && r<grid.length)
    const colbound=((c>=0)&& c<grid[0].length)
    if(!colbound || !rowbound){
        return 0
    }

    if(grid[r][c]=="W"){
        return 0
    }

    const pos=r+","+c
    if(visited.has(pos)){return 0}
    visited.add(pos)
    var size=1;
    size+=check(grid,r+1,c,visited)
    size+=check(grid,r-1,c,visited)
    size+=check(grid,r,c-1,visited)
    size+=check(grid,r,c+1,visited)
    

    return size
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