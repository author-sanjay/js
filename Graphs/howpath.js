const howpath=(graph,source,dist)=>{
    if(source===dist){
        return [];
    }
    
    for(let neighbour of graph[source]){
        var result =howpath(graph,neighbour,dist)
        return [...result,neighbour]
        
    }
    
}

const graph1 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };

console.log(howpath(graph1,"f","k"))