const connecteccomponentcount=(graph)=>{
    var count=0
    const visited= new Set()
    for( let node in graph){
        if(isconnected(graph,node,visited)===true){
            count++;
        }
    }

    return count
}


const isconnected=(graph, node,visited,count)=>{
    if(visited.has(String(node))) return false

    visited.add(String(node))
    for(let neighbour of graph[node]){
        isconnected(graph,neighbour,visited)
    
    }

    return true
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