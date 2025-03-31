const proyecto = require("./Proyecto"); // Importamos el módulo Proyecto
const { Tarea, TareaCompuesta, Minima, Maxima, Media } = require("./Tareas"); // Importamos las clases Tarea y TareaCompuesta

console.log('prueba de importacion');

const t1 = new Tarea("1", 3, new Minima()); // Tarea simple
console.log(t1)

console.log(t1.getCosto());


const t2 = new TareaCompuesta("2", 5, new Media(),[
  new Tarea("2.1", 6, new Media()),
  new TareaCompuesta("2.2", 8, new Maxima(), [
    new Tarea("2.2.1", 3, new Minima()), 
    new Tarea("2.2.2", 4, new Media())
    ]
  )]
);

const t3 = new TareaCompuesta("3", 7, new Maxima(),[
  new Tarea("3.1", 6, new Media()),
  new Tarea("3.2", 3, new Media())
]);

const t4 = new TareaCompuesta("4", 12, new Maxima(), [ //(12*10*1.07)+((12-10)*1000)= 2128.4
  new Tarea("4.1", 5, new Media()), //5*10*1.05=52.5
  new Tarea("4.2", 8, new Minima()), //80
  new Tarea("4.3", 10, new Minima()), //100
  new Tarea("4.4", 10, new Minima()), //100
  new TareaCompuesta("4.4.1",17, new Maxima(), [ //17*10*1.07 +(7000)= 7181.9
    new TareaCompuesta("4.4.1.1",2,new Media(), [ //21
      new Tarea("4.4.1.1.1", 8, new Minima())//80
  ]),
]//total = * 1.04 = 10133.552
)])

console.log(t4.tareas.length)
console.log('Costo tarea 1: ', t1.getCosto());

console.log('Costo tarea 2: ',t2.getCosto());

console.log('Costo tarea 3: ',t3.getCosto());

console.log('Costo tarea 4: ',t4.getCosto());


proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);
proyecto.agregarTarea(t4);

proyecto.mostrarTareas();
console.log(`Duracion Total: ${proyecto.getDuracion()}`);

console.log(`Costo Total: ${proyecto.getCosto()}`);


/*
Costo y Complejidades

El costo en dinero de una tarea es igual al tiempo de la tarea multiplicado por un valor común y configurable para todas las complejidades. Además cada complejidad puede agregarle un porcentaje extra que se suma al costo.

valorComun = x

costoInicial = x * duracion
tipoComplejidad = { minima, media, maxima }


minima = costoInicial * 1
media = costoInicial * 1.05
maxima 
  si duracion <= 10 unidades entonces costoInicial * 1.07
  si tiempo > 10 unidades entonces costoInicial*1.07 + (1000*(duracion-10))
  
•⁠  ⁠Complejidad mínima: no agrega porcentaje extra.
•⁠  ⁠Complejidad media: agrega un 5% extra
•⁠  ⁠Complejidad máxima:
  - Si el tiempo es menor o igual a 10 unidades entonces agrega un extra del 7%
  - Si el tiempo es mayor a 10 unidades entonces agrega un extra del 7% más $1000 por cada día que la tarea exceda las 10 unidades.
cantidadSubtareas() > 3 ? costoBase * 1.04 : costoBase

A su vez las tareas que tengan más de 3 subtareas directas asociadas tienen un costo extra del 4% por overhead.
--> solo puede pasar en complejas
si cantidadSubtareas() > 3 ? costoBase * 1.04 : costoBase

*/