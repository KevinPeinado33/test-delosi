import { renderHook, act } from '@testing-library/react';

import { useMatrix } from '@/features/matrix';

describe('Matrix hooks: useMatrix', () => {

  it('Inicializar con el tamaño establecido.', () => {
    const { result } = renderHook(() => useMatrix(2));

    expect(result.current.matrixSize).toBe(2);
    expect(result.current.matrixValues).toEqual([['', ''], ['', '']]);
  });

  it('Agregar campos.', () => {
    const { result } = renderHook(() => useMatrix(2));

    act(() => {
      result.current.handleAddFields();
    });

    expect(result.current.matrixSize).toBe(3);
    expect(result.current.matrixValues).toEqual([['', '', ''], ['', '', ''], ['', '', '']]);
  });

  it('Reset campos.', () => {
    const { result } = renderHook(() => useMatrix(2));

    act(() => {
      result.current.handleAddFields();
      result.current.handleResetFields();
    });

    expect(result.current.matrixSize).toBe(2);
    expect(result.current.matrixValues).toEqual([['', ''], ['', '']]);
  });

  it('Establecer el valor en la posición correcta.', () => {
    const { result } = renderHook(() => useMatrix(2));

    act(() => {
      result.current.handleInputChange(0, 1, '6');
    });

    expect(result.current.matrixValues[0][1]).toBe('6');
  });

});