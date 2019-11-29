//GRAPH USING MATRIX
class Graph {
  constructor(n) {
    this.rows = n;
    this.columns = n;
    this.graph = new Array(this.rows)
      .fill(0)
      .map(() => new Array(this.columns).fill(0));
  }

  isSquared() {
    //tell if the matrix has the same amout of rows and columns
    return this.rows === this.columns ? true : false;
  }

  isSymetric() {
    if (!this.isSquared()) return false;
    else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          if (i != j && this.graph[i][j] != this.graph[j][i]) return false;
        }
      }
      return true;
    }
  }

  isDirected() {
    return !this.isSymetric();
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

  isMultigraph() {
    for (let i = 0; i < this.rows - 1; i++) {
      if (this.graph[i][i] != 0) return true;
    }
    return false
  }

  isSubgraph(graphToCompare) {
    if(this.rows < graphToCompare.rows && this.columns < graphToCompare.columns)
      return false;
    else{

    }
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
    return conections >= (this.graph.length - 1) * 2 ? true : false;
  }

}

let cl = console.log,
  ct = console.table;

let matrixGraph = new Graph(3);
matrixGraph.addVertex();
matrixGraph.addVertex();
matrixGraph.addVertex();
// matrixGraph.addVertex();

// cl(matrixGraph.graph)


matrixGraph.addEdge(0, 1, true);
matrixGraph.addEdge(1, 2, true);
matrixGraph.addEdge(2, 5, true);
matrixGraph.addEdge(5, 4);
matrixGraph.addEdge(4, 3, true);


cl(matrixGraph.graph);
ct(matrixGraph.graph);
cl(`Number of Columns: ${matrixGraph.columns}`);
cl(`Number of Rows: ${matrixGraph.rows}`);
cl(`Is Completed: ${matrixGraph.isComplete()}`);
cl(`Is directed: ${matrixGraph.isDirected()}`);
cl(`Is multigraph: ${matrixGraph.isMultigraph()}`);
cl(`Is symetric: ${matrixGraph.isSymetric()}`);