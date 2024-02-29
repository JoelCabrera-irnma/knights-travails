class Nodo {
    constructor(x, y, mark=false, charge){
        this.x = x,
        this.y = y,
        this.mark = mark
        this.charge = charge
    }
}

const vertices = [];

for (let i = 0; i <= 7; i++) {
  for (let j = 0; j <= 7; j++) {
    const nodo = new Nodo (i, j)
    vertices.push(nodo);
  }
}
console.log(vertices);

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

function find(cordX , coordY){
    let nodos = vertices
    for (let i = 0; i < nodos.length; i++) {
        const nodo = nodos[i];
        if(nodo.x == cordX && nodo.y == coordY){
            return nodo
        }
    }
}

function knightMoves(origin, meta) {
    const [a, b] = origin;
    const start = find(a,b);
    const [x, y] = meta;

    start.charge = `${start.x},${start.y} `

    let queue = [];
    
    queue.push(start)

    while(queue.length>0){
   
      if(queue[0].x == x && queue[0].y == y){
       return queue[0]
      } else {
        //queue.push(",")
        queue[0].mark = true;
        const selectChild = Object.keys(queue[0]).filter(prop => typeof queue[0][prop] == "object");
        for (let i = 0; i < selectChild.length; i++) {
            const prop = selectChild[i];
            const child = queue[0][prop]
            if(child.mark === false){
                child.charge =  `${queue[0].charge}+ ${child.x},${child.y} `
                queue.push(child)
            }
            
        }
      }
      queue.shift()
    }
    return 
}

console.log(knightMoves([0,0],[7,0]))


//console.log(find(3,4))

const ej = new Nodo(8,4)
const ex = new Nodo(2,6)
const ep = new Nodo(6,7)

// Objeto de ejemplo
const miObjeto = {
    propiedad1: 10,
    propiedad2: 20,
    propiedad3: 30,
    propiedad4: 40,
    propiedad5: "jalisco",
    propiedad6: ej,
    propiedad7: ex,
    propiedad8: ep
  };
  
  // Condición: Seleccionar propiedades cuyo valor es mayor que 20
  const propiedadesCumplenCondicion = Object.keys(miObjeto).filter(propiedad => typeof miObjeto[propiedad] == "object");
  function mandarHijosAlaCola(array) {
    const queue = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const hijo = miObjeto[element]
        queue.push(hijo)
    }
    console.log(queue)
  }
  //mandarHijosAlaCola(propiedadesCumplenCondicion)
  // Resultado
  //console.log(propiedadesCumplenCondicion);
  
const arrr = []
arrr.push(",")
console.log(arrr)

// let asdas = {
//     kol: 12,
//     kol: "hueso",
// }

// console.log(asdas.kol)

// // Variable con el nombre de la propiedad
// let nombreDePropiedad = 32;

// // Objeto al que se le agregará la propiedad
// let miObjeto = {};

// // Valor que se asignará a la nueva propiedad
// let valorDePropiedad = "Hola, soy una propiedad nueva";

// // Agregar la propiedad al objeto
// miObjeto["ref"+nombreDePropiedad] = valorDePropiedad;

// // Mostrar el objeto resultante
// console.log(miObjeto);
