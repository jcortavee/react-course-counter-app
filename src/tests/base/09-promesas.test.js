import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas promesas', () => {
    test('should return an async heroe', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('should return an error', (done) => {
        const id = 10;

        getHeroeByIdAsync(10)
            .catch(err => {
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
    
});