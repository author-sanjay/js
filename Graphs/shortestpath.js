const shortestPath=(edges,src,dest)=>{
    const visited=new Set([src])
    const graph=buildgraph(edges)
const queue=[[src,0]]

    while(queue.length>0){
        const [node,dist]=queue.shift()
        if(node===dest) {return dist}
        for(let point of graph[node]){
            if(!visited.has(point)){
                visited.add(point)
                queue.push([point,dist+1])

            }
            
        }
    }

    return -1


}

const buildgraph=(edges)=>{
    const graph1={}
    for(let node of edges){
        const [a,b]=node
        if(!(a in graph1)) graph1[a]=[]
        if(!(b in graph1)) graph1[b]=[]
graph1[a].push(b)
graph1[b].push(a)
    }
    return graph1
}

const edges = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];
  
   // -> -1
  
 console.log(shortestPath(edges, 'b', 'g'))  // -> 2src