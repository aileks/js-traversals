const adjList = {
  A: ["B", "C", "D"],
  B: ["A", "E"],
  C: ["A", "F", "G"],
  D: ["A", "H"],
  E: ["B", "I", "J"],
  F: ["C"],
  G: ["C", "K"],
  H: ["D", "L"],
  I: ["E"],
  J: ["E", "M"],
  K: ["G"],
  L: ["H"],
  M: ["J"],
};

// traversal
const bft = (start) => {
  const queue = [start];
  const visited = new Set();
  const path = [];

  visited.add(start);

  while (queue.length > 0) {
    const curr = queue.shift();
    path.push(curr);

    for (const neighbor of adjList[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return path;
};

// search
const bfs = (start, end) => {
  const queue = [start];
  const visited = new Set();

  visited.add(start);

  while (queue.length) {
    const curr = queue.shift();

    if (curr === end) return true;

    if (visited.has(curr)) continue;

    for (const neighbor of adjList[curr]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return false;
};

console.log("Breadth-first traversal:", bft("A")); // =>
console.log("Breadth-first search:", bfs("B", "I")); // => false
