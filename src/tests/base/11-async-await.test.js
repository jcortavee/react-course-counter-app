import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas async-await', () => {
    test('should return the url', async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string');
    });
    
});