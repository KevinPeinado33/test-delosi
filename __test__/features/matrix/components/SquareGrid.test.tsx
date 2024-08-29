import { render } from '@testing-library/react';

import { SquareGrid } from '@/features/matrix';

describe('Matrix components: SquareGridComponent', () => {

    const mockMatrix = [['5', '4'], ['7', '9']];
    const mockMatrixSize = 2;
    const mockOnInputChange = jest.fn();

    it('Obtener el numero de inputs.', () => {
        const { getAllByRole } = render(
            <SquareGrid 
                matrix={mockMatrix} 
                matrixSize={mockMatrixSize} 
                onInputChange={mockOnInputChange} 
            />
        );
        const inputs = getAllByRole('textbox');
        
        expect(inputs).toHaveLength(4);
    });

    it('Obtener los inputs con valores correctos.', () => {
        const { getAllByRole } = render(
            <SquareGrid matrix={mockMatrix} matrixSize={mockMatrixSize} onInputChange={mockOnInputChange} />
        );
        const inputs = getAllByRole('textbox');

        expect(inputs[0]).toHaveValue('5');
        expect(inputs[1]).toHaveValue('4');
        expect(inputs[2]).toHaveValue('7');
        expect(inputs[3]).toHaveValue('9');
    });

    it('Mantener desactivado los inputs cuando tenga isDisabled.', () => {
        const { getAllByRole } = render(
            <SquareGrid 
                matrix={mockMatrix} 
                matrixSize={mockMatrixSize} 
                onInputChange={mockOnInputChange} 
                isDisabled={true} 
            />
        );        
        const inputs = getAllByRole('textbox');

        inputs.forEach(input => {
            expect(input).toBeDisabled();
        });
    });
    
});