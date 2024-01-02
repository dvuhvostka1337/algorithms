// Поиск в ширину в графе
const graph = {}

graph["a"] = ['b', 'c'];
graph["b"] = ['c', 'd']
graph["c"] = ['d']
graph["d"] = ['e', 'f']
graph["f"] = ['e']
graph["e"]

function restorePath(start, end, parents) {
    const path = [];
    let current = end;
    path.push(current);
    while(current != start){
        path.unshift(parents[current]);
        current = parents[current];
    }
    return path;
}

function calculateWay(start, end){
    const searchQueue = [start];
    const visited = new Set();
    const parents = {};

    while(searchQueue.length){
        const current = searchQueue.shift();
        if(current === end) {
            return restorePath(start, end, parents);
        } 
        if(!visited.has(current)){
            const neighbors = graph[current];
            for(let neighbor of neighbors){
                if(!visited.has(neighbor)){
                    searchQueue.push(neighbor)
                    parents[neighbor] == undefined && (parents[neighbor]=current);
                }
            }
            visited.add(current)
        }
    }
    return [];
}

let path = calculateWay("a", "e")
console.log(path);