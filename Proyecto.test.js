const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");

describe("Duracion Proyecto", () => {
  let t1;
  let t2;
  let t3;

  beforeEach(() => {
    t1 = new Tarea("1", 3);
    t2 = new TareaCompuesta("2", 5, [
      new Tarea("2.1", 6),
      new TareaCompuesta("2.2", 8, [
        new Tarea("2.2.1", 3),
        new Tarea("2.2.2", 4),
      ]),
    ]);
    t3 = new TareaCompuesta("3", 7, [new Tarea("3.1", 6), new Tarea("3.2", 3)]);

    proyecto.agregarTarea(t1);
    proyecto.agregarTarea(t2);
    proyecto.agregarTarea(t3);
  });

  afterEach(() => {
    proyecto.cleanTareas();
  });

  test("La duración total de la tarea 1 debería ser 3", () => {
    expect(t1.getDuracion()).toBe(3);
  });

  test("La duración total de la tarea 2 debería ser 26", () => {
    expect(t2.getDuracion()).toBe(26);
  });

  test("La duración total de la tarea 3 debería ser 16", () => {
    expect(t3.getDuracion()).toBe(16);
  });

  test("La duración total del proyecto debería ser 45", () => {
    expect(proyecto.getDuracion()).toBe(45);
  });
});
