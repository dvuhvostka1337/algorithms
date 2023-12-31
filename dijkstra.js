const graph = {};

graph['x1'] = {}
graph['x1']['x2'] = 5;
graph['x1']['x3'] = 2;
graph['x1']['x5'] = 1;

graph['x2'] = {}
graph['x2']['x4'] = 1;

graph['x3'] = {}
graph['x3']['x2'] = 1;
graph['x3']['x4'] = 3;

graph['x4'] = {}
graph['x5'] = {}
graph['x5']['x4'] = 2;

const distances = {}; // Кратчайшая дистанция до всех точек от начальной
const unvisited = new Set(); // Стек всех точек которые необходимо поситить
const visited = new Set(); // Все посещенные точки
const parents = {};

function initHashTables(start) {
    for(node of Object.keys(graph)){
        distances[node] = Infinity;
        unvisited.add(node);
    }
    distances[start] = 0;
}

function getNeighbors(node) {
    return Object.keys(graph[node]);
}

// взять ближайший узел к началу, который еще не был использован
function getNearestUnvisitedNodeFromStart() {
    let nearestNode = null;
    let distance = Infinity;
    for(node of Object.keys(distances)){
        if(distances[node] < distance && !visited.has(node)){
            distance = distances[node]
            nearestNode = node;
        }
    }
    return nearestNode
}

function restorePath(start, end) {
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
    initHashTables(start);
    let current = start;
    while(current != null ){
        if(!visited.has(current)){
            const neighbors = getNeighbors(current);
            for(let neighbor of neighbors){
                const distance = distances[current] + graph[current][neighbor];
                if (distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                    parents[neighbor] = current;
                }
            }
            unvisited.delete(current)
            visited.add(current);
            current = getNearestUnvisitedNodeFromStart(current);
        }
    }
    return restorePath(start, end);
}

let path = calculateWay("x1", "x4")
console.log(path);