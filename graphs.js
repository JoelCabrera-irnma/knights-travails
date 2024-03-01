class Nodo {
    constructor(x, y, mark=false, charge){
        this.x = x,
        this.y = y,
        this.mark = mark
        this.charge = charge
    }
}

//Creacion de los vertices/nodos del tablero
const vertices = [];

for (let i = 0; i <= 7; i++) {
  for (let j = 0; j <= 7; j++) {
    const nodo = new Nodo (i, j)
    vertices.push(nodo);
  }
}
console.log(vertices);

//Union de los vertices/nodos del tablero
function buildGraph(){
 for (let i = 0; i < vertices.length; i++) {
    const nodo = vertices[i];
    crearConexiones(nodo)
 }
}

function crearConexiones(nodo) {
    for (let i = 0; i < vertices.length; i++) {
        const item = vertices[i];

        if((item.x== nodo.x+2 && item.y== nodo.y-1)||(item.x== nodo.x+2 && item.y== nodo.y+1)||
            (item.x== nodo.x+1 && item.y== nodo.y-2)||(item.x== nodo.x+1 && item.y== nodo.y+2)||
            (item.x== nodo.x-1 && item.y== nodo.y-2)||(item.x== nodo.x-1 && item.y== nodo.y+2)||
            (item.x== nodo.x-2 && item.y== nodo.y-1)||(item.x== nodo.x-2 && item.y== nodo.y+1)
        ){
            nodo["ref_"+i] = item
        }
    }
}

buildGraph()

//Funcion auxiliar para encontrar un nodo dado
function find(cordX , coordY){
    let nodos = vertices
    for (let i = 0; i < nodos.length; i++) {
        const nodo = nodos[i];
        if(nodo.x == cordX && nodo.y == coordY){
            return nodo
        }
    }
}

//Encontrar el camino mas corto hacia un casillero determinado
function knightMoves(origin, meta) {
    const [a, b] = origin;
    const start = find(a,b);
    const [x, y] = meta;

    start.charge = `[${start.x},${start.y}]`

    let queue = [];

    queue.push(start)

    while(queue.length>0){
   
      if(queue[0].x == x && queue[0].y == y){
        clear(); //Restaura la propiedad mark de todos los nodos a su valor por defecto "false"
        const output = returnClearResult(queue[0].charge)
        return output
      } else {
        //queue.push(",")
        queue[0].mark = true;
        const selectChild = Object.keys(queue[0]).filter(prop => typeof queue[0][prop] == "object");
        for (let i = 0; i < selectChild.length; i++) {
            const prop = selectChild[i];
            const child = queue[0][prop]
            if(child.mark === false){
                child.charge =  `${queue[0].charge}+[${child.x},${child.y}]`
                queue.push(child)
            }
            
        }
      }
      queue.shift()
    }
    return 
}

function clear() {
  for (let i = 0; i < vertices.length; i++) {
    const nodo = vertices[i];
    nodo.mark = false
  }
}

function returnClearResult(string) {
  const store = string.split("+");
  console.log(`You made it in ${store.length} moves!  Here's your path:`);
  store.forEach(element => {
      console.log(element)
  });
}

//TEST DRIVER:
knightMoves([3,7],[6,0])

knightMoves([0,0],[3,6])

knightMoves([0,0],[7,7])





