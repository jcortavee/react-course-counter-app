describe('Pruebas en el archivo demo.test.js', () => {
    test('deben ser iguales los string', () => {
        // 1. Inicializacion
        const message = 'Hola';
    
        // 2. Estimulo
        const message2 = `Hola`;
    
        // 3. Observar el comportamiento
        expect(message).toBe(message2);
    
    });
});