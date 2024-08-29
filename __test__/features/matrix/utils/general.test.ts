import { fillMatrix } from '@/features/matrix';

describe('Matrix utils: general', () => {

    it('Crear matriz con el tamaño establecido.', () => {
        expect(fillMatrix(2)).toEqual([['', ''], ['', '']]);
        expect(fillMatrix(3)).toEqual([['', '', ''], ['', '', ''], ['', '', '']]);
    });

});
