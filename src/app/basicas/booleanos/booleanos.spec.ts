import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {
  it('debe regresar true', () => {
    const resp = usuarioIngresado();
    expect(resp).toBeTruthy();
  });
});
