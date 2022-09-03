const connecteccomponentcount=(graph)=>{
    let largest=0;
    var visited=new Set()
    for(let node in graph){
        var size= longestsize(graph,node,visited)
        if(size>largest){
            largest=size
        }
    }

    return largest;
}


const longestsize=(graph1,node,visited)=>{
 if(visited.has(String(node))) return 0

 visited.add(String(node))
 let size=1;

 for(let newnode of graph1[node]){
     size+= longestsize(graph1,newnode,visited)
 }

 return size
}

console.log(connecteccomponentcount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  }))