const createNode = key => {
  const neighbours = []

  return {
    key,
    neighbours,
    addNeighbour(node) {
      neighbours.push(node)
    }
  }
}

const createGraph = (isDirected = false) => {
  const nodes = []
  const edges = []

  return {
    isDirected,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key))
    },
    getNode(key) {
      return nodes.find(node => node.key === key)
    },
    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key)
      const node2 = this.getNode(node2key)

      node1.addNeighbour(node2)
      edges.push(`${node1key}-${node2key}`)

      if (!isDirected) {
        node2.addNeighbour(node1)
      }
    },
    print() {
      return nodes.map(({ key, neighbours }) => {
        let result = key

        if (neighbours.length) {
          result += ` => ${neighbours
              .map(neighbour => neighbour.key)
              .join(" ")}`
        }
        return result
      })
      .join("\n")
    }
  }
}

// e.g.
const graph = createGraph(true)

graph.addNode("Natasha")
graph.addNode("Emma")
graph.addNode("Sally")
graph.addNode("Rachel")
graph.addNode("Jill")

graph.addEdge("Natasha", "Emma")
graph.addEdge("Natasha", "Rachel")
graph.addEdge("Emma", "Natasha")
graph.addEdge("Sally", "Natasha")
graph.addEdge("Rachel", "Natasha")
graph.addEdge("Rachel", "Emma")

console.log(graph.print());
