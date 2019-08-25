import { Jugador } from './clases';
describe('Pruebas de Clase', () => {

  let jugador = new Jugador();

  beforeAll( () => {
    // console.log('beforeAll');
  });

  beforeEach( () => {
    // jugador.hp = 100;
    // console.log('beforeEach');
    jugador = new Jugador();
  });

  afterAll( () => {
    // console.log('afterAll');
  });

  afterEach( () => {
    // console.log('afterEach');
  });


  it('Debe retornar 80 si recibe 20 de danio', () => {
    const resp = jugador.recibeDanio(20);
    expect( resp ).toBe(80);
  });

  it('Debe retornar 50 si recibe 50 de danio', () => {
    const resp = jugador.recibeDanio(50);
    expect( resp ).toBe(50);
  });

  it('Debe retornar 0 si recibe 100 de danio', () => {
    const resp = jugador.recibeDanio(100);
    expect( resp ).toBe(0);
  });

});
