const undirectedgraph=(edges,nodeA,nodeB)=>{
   const graph=  helper(edges)
   return ispath(graph,nodeA,nodeB, new Set())
}

const helper=(edges)=>{
    const graph1={}
    for(let edge of edges){
        const [a,b]=edge;
        if(!(a in graph1)) graph1[a]=[]
        if(!(b in graph1)) graph1[b]=[]
        graph1[a].push(b)
        graph1[b].push(a)
    }
    return graph1;
}

const ispath=(graph, src,dest, visited)=>{
    if(src===dest) return true
    if(visited.has(src)) return false
    visited.add(src)

    for(let neighbour of graph[src]){
        if(ispath(graph,neighbour,dest,visited)===true){
            return true;
        }
    }
    return false;
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
console.log(undirectedgraph(edges, 'j', 'o'))