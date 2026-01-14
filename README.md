# Pookie Grid Pathfinding Visualizer

This project is an interactive pathfinding visualizer that demonstrates how popular graph search algorithms explore a grid to find the shortest path between two points. It provides real-time animations, customizable grids, and a modern UI to enhance understanding of pathfinding concepts.

---

## Problem Description

Pathfinding is a fundamental problem in computer science where the goal is to determine the optimal route between a **start node** and a **target node** while navigating through obstacles and weighted paths.

In this visualizer:
- The environment is represented as a **2D grid**
- Each cell acts as a node
- Nodes may represent free space, walls, weighted terrain, or special stations
- The objective is to find the shortest path based on the selected algorithm

---

## Algorithms Implemented

The following algorithms are supported and can be visualized step-by-step:

- **Dijkstra’s Algorithm** (weighted, guarantees shortest path)
- **A\*** Search (heuristic-based, optimized Dijkstra)
- **Breadth-First Search (BFS)** (unweighted)
- **Depth-First Search (DFS)** (exploratory)
- **Bidirectional BFS** (simultaneous search from start and target)

---

## Grid Elements & Definitions

- **Start Node**: Starting position of the search  
- **Target Node**: Destination node  
- **Wall Node**: Blocks traversal  
- **Weight Node**: Increases traversal cost  
- **Station Node**: Intermediate checkpoint  
- **Visited Node**: Node explored during execution  
- **Shortest Path Node**: Final optimal path

A node is considered reachable if it is **not blocked by a wall** and satisfies the traversal constraints of the selected algorithm.

---

## Visualization Features

- Real-time animation of node exploration
- Directional arrows for shortest path
- Adjustable animation speed
- Support for **4-directional** and **8-directional** movement
- Light and Dark themes
- Custom color palette (rusty pink theme)

---

## Maze & Pattern Generation

The grid supports automatic pattern generation, including:

- Recursive Division Maze
- Random Maze
- Weighted Maze
- Stair Pattern

These help in testing algorithm performance under different conditions.

---

## Tech Stack

- **React.js**
- **JavaScript (ES6)**
- **CSS3**
- **React-Bootstrap**
- **React Icons**

---

## Getting Started

### Installation

```bash
git clone https://github.com/lennisa/PookieGridPathfindingVisualizer-.git
cd path-finding-visualiser
npm install
npm start

The app will run locally at http://localhost:3000.
---
##Motivation

This project was built to:

Strengthen understanding of graph algorithms

Visualize algorithm behavior interactively

Practice UI design with React

Build a portfolio-ready project
---

Author

Angelica Das
GitHub: https://github.com/lennisa

---

License

This project is for educational and demonstrative purposes.
