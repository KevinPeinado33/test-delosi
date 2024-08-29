import { rotateMatrix } from '@/features/matrix';

describe('Matrix utils: rotateMatrix', () => {

    it('Girar matriz 90 grados antihorario.', () => {
        const input = [['1', '2'], ['3', '4']];
        const expected = [['2', '4'], ['1', '3']];

        expect(rotateMatrix(input)).toEqual(expected);
    });

});