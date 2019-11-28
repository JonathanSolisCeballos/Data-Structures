class Graph{
  constructor(){}
  addVertex(o){}
  addEdge(v1,v2){}
}

let n1 = {d:1,l:[]}
let n2 = {d:2,l:[]}
let n3 = {d:3,l:[]}

n1.l[0]=n2;//1->2
n2.l[0]=n3;//2->3
n1.l[1]=n3;//1->3

console.log(n1.l);
console.log(n2.l);
console.log(n3.l);