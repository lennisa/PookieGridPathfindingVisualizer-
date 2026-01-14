// bidirectionalBFS.js

function getNeighbors(node, grid, allowedDirections) {
  const neighbors = [];
  const { row, col } = node;

  const directions4 = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const directions8 = [...directions4, [1, 1], [1, -1], [-1, 1], [-1, -1]];

  const directions = allowedDirections === 8 ? directions8 : directions4;

  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;

    if (
      newRow >= 0 &&
      newRow < grid.length &&
      newCol >= 0 &&
      newCol < grid[0].length
    ) {
      neighbors.push(grid[newRow][newCol]);
    }
  }

  return neighbors;
}

export function bidirectionalBFS(
  grid,
  startNode,
  finishNode,
  allowedDirections
) {
  if (!startNode || !finishNode) return [];
  if (startNode === finishNode) return [startNode];

  const visitedNodesInOrder = [];

  const queueStart = [startNode];
  const queueEnd = [finishNode];

  const visitedStart = new Map();
  const visitedEnd = new Map();

  visitedStart.set(startNode, null);
  visitedEnd.set(finishNode, null);

  while (queueStart.length && queueEnd.length) {
    // ===== START SIDE =====
    const currentStart = queueStart.shift();
    visitedNodesInOrder.push(currentStart);

    for (const neighbor of getNeighbors(
      currentStart,
      grid,
      allowedDirections
    )) {
      if (neighbor.isWall || visitedStart.has(neighbor)) continue;

      visitedStart.set(neighbor, currentStart);
      queueStart.push(neighbor);

      if (visitedEnd.has(neighbor)) {
        buildPath(neighbor, visitedStart, visitedEnd);
        return visitedNodesInOrder;
      }
    }

    // ===== END SIDE =====
    const currentEnd = queueEnd.shift();
    visitedNodesInOrder.push(currentEnd);

    for (const neighbor of getNeighbors(currentEnd, grid, allowedDirections)) {
      if (neighbor.isWall || visitedEnd.has(neighbor)) continue;

      visitedEnd.set(neighbor, currentEnd);
      queueEnd.push(neighbor);

      if (visitedStart.has(neighbor)) {
        buildPath(neighbor, visitedStart, visitedEnd);
        return visitedNodesInOrder;
      }
    }
  }

  return visitedNodesInOrder;
}

function buildPath(meetingNode, visitedStart, visitedEnd) {
  // Path back to start
  let curr = meetingNode;
  while (visitedStart.get(curr) !== null) {
    const prev = visitedStart.get(curr);
    curr.previousNode = prev;
    curr = prev;
  }

  // Path forward to finish
  curr = visitedEnd.get(meetingNode);
  let prev = meetingNode;

  while (curr !== null) {
    curr.previousNode = prev;
    prev = curr;
    curr = visitedEnd.get(curr);
  }
}
