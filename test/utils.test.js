const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('início maior ou igual ao fim', () => {
            expect(gerarNumeroAleatorio(20, 10))
                .toBe(-1);
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
    }); 

    describe('acharCaracter', () => {
        test('comprimento valido', () => {
            expect(acharCaracter(5, 'abcde', 'c'))
                .toBe('caracter encontrado');
        });
    });    
});