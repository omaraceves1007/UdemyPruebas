import { incrementar } from './numeros';

describe('Pruebas de numeros', () => {

  it('Regresar 100 si numero mayor a 100', () => {
    const resp = incrementar(150);
    expect( resp ). toBe(100);
  });

  it('Regresar numero mas 1 si no es mayor a 100', () => {
    const resp = incrementar(50);
    expect( resp ). toBe(51);
  });

});
