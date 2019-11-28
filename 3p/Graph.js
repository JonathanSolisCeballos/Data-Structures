//GRAPH USING MATRIX
class Graph {
  constructor(nOfNodes) {
    this.rows = nOfNodes;
    this.columns = nOfNodes;
    this.graph = new Array(this.rows)
      .fill(0)
      .map(() => new Array(this.columns).fill(0));
  }

  addVertex() {
    this.graph.push(new Array(this.rows).fill(0));
    this.graph.map(el => el.push(0));
    this.rows++;
    this.columns++;
  }

  addEdge(node1, node2, isBidirectional = false) {
    this.graph[node1][node2]++;
    if (isBidirectional) this.graph[node2][node1]++;
  }

  printGraph() {
    return this.graph;
  }

  isComplete() {
    let conections = 0;
    this.graph.map(el =>
      el.map(n => {
        if (n != 0) conections++;
      })
    );
    // console.log(conections);
    // console.log(this.graph.length);
    return conections >= --this.graph.length * 2 ? true : false;
  }
}

let cl = console.log,
  ct = console.table;

let matrixGraph = new Graph(3);
matrixGraph.addVertex();
matrixGraph.addVertex();
matrixGraph.addVertex();

matrixGraph.addEdge(0, 1, true);
matrixGraph.addEdge(1, 2, true);
matrixGraph.addEdge(2, 5, true);
matrixGraph.addEdge(5, 4, true);
matrixGraph.addEdge(4, 3, true);

cl(matrixGraph.isComplete());

cl(matrixGraph.graph);
ct(matrixGraph.graph);
cl(`Number of Columns: ${matrixGraph.columns}`);
cl(`Number of Rows: ${matrixGraph.rows}`);
