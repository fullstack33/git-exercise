function mapdata() {

  let nodes = [];
  let edges = [];
  let row = 3
  // Write your logic here...


  // Digonal Calculate
  const diagonal = (i, j) => {
    if (j + 1 < row && i + 1 < row) {
      edges.push({
        "data": {
          "id": `${i}-${j}ES`,
          source: `N${i}-${j}`,
          target: `N${i+1}-${j+1}`
        }
      })
    }
    if (j + 1 < row && i - 1 >= 0) {
      edges.push({
        "data": {
          "id": `${i}-${j}EN`,
          source: `N${i}-${j}`,
          target: `N${i-1}-${j+1}`
        }
      })
    }
    // if (j - 1 >= 0 && i + 1 < row) {
    //   edges.push({
    //     "data": {
    //       "id": `${i}-${j}WN`,
    //       source: `N${i}-${j}`,
    //       target: `N${i+1}-${j-1}`
    //     }
    //   })
    // }
    // if (j - 1 >= 0 && i - 1 >= 0) {
    //   edges.push({
    //     "data": {
    //       "id": `${i}-${j}WS`,
    //       source: `N${i}-${j}`,
    //       target: `N${i-1}-${j-1}`
    //     }
    //   })
    // }

  }

  // calculate edges
  const calculateEdges = (i, j) => {
    if (j + 1 < row) {
      edges.push({
        "data": {
          "id": `${i}-${j}E`,
          source: `N${i}-${j}`,
          target: `N${i}-${j+1}`
        }
      })
    }

    if (i + 1 < row) {
      edges.push({
        "data": {
          "id": `${i}-${j}S`,
          source: `N${i}-${j}`,
          target: `N${i+1}-${j}`
        }
      })
    }

    if (j - 1 >= 0) {
      edges.push({
        "data": {
          "id": `${i}-${j}W`,
          source: `N${i}-${j}`,
          target: `N${i}-${j-1}`
        }
      })
    }

    if (i - 1 >= 0) {
      edges.push({
        "data": {
          "id": `${i}-${j}N`,
          source: `N${i}-${j}`,
          target: `N${i-1}-${j}`
        }
      })
    }
    // diagonal
    diagonal(i, j)
  }



  // Calculate Nodes
  const calculateNodes = () => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < row; j++) {
        let obj = {
          data: {
            id: `N${i}-${j}`
          }
        }
        nodes.push(obj)
        calculateEdges(i, j)
      }
    }
  }

  calculateNodes()


  elements = {
    nodes,
    edges
  };

  console.log("Node Length: ", nodes.length)
  console.log("Edges Length: ", edges.length)
  return elements;

}
module.exports.mapdata = mapdata;