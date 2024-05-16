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
const dft = (start) => {
  const stack = [start];
  const visited = new Set();
  const path = [];

  visited.add(start);

  while (stack.length) {
    const curr = stack.pop();
    path.push(curr);

    for (const neighbor of adjList[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }

  return path;
};

// search
const dfs = (start, end) => {
  const stack = [start];
  const visited = new Set();

  while (stack.length) {
    const curr = stack.pop();

    if (curr === end) return true;

    for (const neighbor of adjList[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }

  return false;
};

console.log("Depth-first traversal:", dft("A")); // =>  ['A', 'D', 'H', 'L', 'C', 'G', 'K', 'F', 'B', 'E', 'J', 'M', 'I']
console.log("Depth-first search:", dfs("B", "G")); // => true
