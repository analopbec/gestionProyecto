class Proyecto {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  getDuracion() { // Devuelve la duracion total de todas las tareas
    // Utiliza reduce para sumar las duraciones de todas las tareas
    // La funcion reduce toma un acumulador (acum) y la tarea actual (tarea)
    return this.tareas.reduce((acum, tarea) => acum + tarea.getDuracion(), 0);
  }

  mostrarTareas() {
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }

  cleanTareas() {
    this.tareas = [];
  }

  getCosto() {
    // Calcula el costo total de todas las tareas
    return this.tareas.reduce((acum, tarea) => acum + tarea.getCosto(), 0);
  }
}

module.exports = new Proyecto();
// Exportamos una instancia de la clase Proyecto
// para que se pueda usar en otros archivos
// y no se creen múltiples instancias de Proyecto

