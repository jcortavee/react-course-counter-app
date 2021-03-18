import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en deses-arr', () => {
    test('debe retorna un string y un numero', () => {
        const [letras, numeros] = retornaArreglo();

        // expect(arr).toBe(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe(typeof 123);
    });
});