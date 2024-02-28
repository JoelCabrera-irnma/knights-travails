class Nodo {
    constructor(x, y){
        this.x = x,
        this.y = y
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
