import { mensaje } from './string';

describe('Pruebas dde Strings', () => {

  it('Debe de regresar un string', () => {
    const resp = mensaje('Omar');

    expect( typeof resp ).toBe('string');
  });

  it('Debe de retornar saludo con nombre enviado', () => {

    const nombre = 'Omar';
    const resp = mensaje(nombre);

    expect( resp ).toContain(nombre);
  });

});
