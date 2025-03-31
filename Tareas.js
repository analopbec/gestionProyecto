const valorComun = 10;

/*
const Complejidad = {
  Minima: (duracion) => duracion * valorComun,
  Media: (duracion) => duracion * valorComun * 1.05,
  Maxima: (duracion) => {
    if (duracion <= 10) {
      return duracion * valorComun * 1.07;
    } else {
      return duracion * valorComun * 1.07 + (1000 * (duracion - 10));
    }
  },
};
*/

class Minima {
  calcularCosto(duracion) {  
    return duracion * valorComun;
  }
}

class Media {
  calcularCosto(duracion) {
    return duracion * valorComun * 1.05;
  }
}
class Maxima {
  calcularCosto(duracion) {
    if (duracion <= 10) {
      return duracion * valorComun * 1.07;
    } else {
      return (
        duracion * valorComun * 1.07 +
        (1000 * (duracion - 10))
      );
    }
  }
}



class Tarea {
  constructor(codigo, duracion, tipoComplejidad) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tipoComplejidad = tipoComplejidad; // Instancia el tipo de complejidad
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
  }
  getCosto(){
    return this.tipoComplejidad.calcularCosto(this.duracion);
  }
} 
    
class TareaCompuesta {
  constructor(codigo, duracion, tipoComplejidad, tareas = []) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.tipoComplejidad = tipoComplejidad;
  }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCodigo() {
    return this.codigo;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
  getCosto() {

    // Calcula el costo base de la tarea compuesta
    const costoBase = this.tipoComplejidad.calcularCosto(this.duracion);
  
    // Calcula el costo total de las subtareas usando reduce
    const costoSubtareas = this.tareas.reduce(
      (acum, tarea) => acum + tarea.getCosto(),
      0 // Valor inicial del acumulador
    );
    // Suma el costo base y el costo de las subtareas
    let costoTotal = costoBase + costoSubtareas;
  
    // Si hay más de 3 subtareas, aplica un costo extra del 4%
    if (this.tareas.length > 3) {
      costoTotal *= 1.04;
    }
  
    return costoTotal;
  }
}




module.exports = { Tarea, TareaCompuesta, Minima, Media, Maxima };
