const haspath=(graph,source,dist)=>{
    if(source===dist){
        return true;
    }
    for(let neighbour of graph[source]){
        if(haspath(graph,neighbour,dist)===true){
            return true;
        }
    }
    return false;
}

const graph1 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };

console.log(haspath(graph1,"f","j"))