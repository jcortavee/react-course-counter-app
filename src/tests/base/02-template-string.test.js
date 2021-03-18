import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
    
    test('test for getSaludo method', () => {
        const name = 'Jose';

        const greeting = getSaludo(name);

        expect(greeting).toBe(`Hola ${name}`);

    });

    test('debe retorna Hola Carlos! si no hay argumento', () => {
        expect('Hola Carlos!').toBe(getSaludo());
    });

});