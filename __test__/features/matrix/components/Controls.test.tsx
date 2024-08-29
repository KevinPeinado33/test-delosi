import { render, fireEvent } from '@testing-library/react';

import { MatrixControls } from '@/features/matrix';

describe('Matrix components: MatrixControls', () => {

  it('Renderizar los 2 botones', () => {
    const { getAllByRole } = render(<MatrixControls onAddField={() => { }} onResetField={() => { }} />);
    const buttons = getAllByRole('button');

    expect(buttons).toHaveLength(2);
  });

  it('Llamar a la funciones cuando damos click en los botones.', () => {
    const mockAddField = jest.fn();
    const mockResetField = jest.fn();

    const { getByText } = render(<MatrixControls onAddField={mockAddField} onResetField={mockResetField} />);

    const addButton = getByText('Agregar campos');
    const resetButton = getByText('Restaurar');

    fireEvent.click(addButton);
    fireEvent.click(resetButton);

    expect(mockAddField).toHaveBeenCalledTimes(1);
    expect(mockResetField).toHaveBeenCalledTimes(1);
  });

  it('Renderizar botónes y validar clases de estilos.', () => {
    const { getByText } = render(<MatrixControls onAddField={() => { }} onResetField={() => { }} />);
    const addButton = getByText('Agregar campos');
    const resetButton = getByText('Restaurar');

    expect(addButton).toHaveClass('button__primary');
    expect(resetButton).toHaveClass('button__secondary');
  });

});