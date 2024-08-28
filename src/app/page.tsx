"use client";
import { useState } from 'react';

import { SquareInput } from '@/shared/components/atoms/inputs';
import { BasicButton } from '@/shared/components/atoms/buttons';

import styles from './page.module.scss';

export default function Home() {

  const [matrixSize, setMatrixSize] = useState(2);
  const [matrixValues, setMatrixValues] = useState<string[][]>(
    Array.from({ length: matrixSize }, () => Array(matrixSize).fill(''))
  );

  const handleAddFields = () => {
    setMatrixSize((prevSize) => prevSize + 1);
    setMatrixValues((prevValues) => [
      ...prevValues.map((row) => [...row, '']),
      Array(prevValues.length + 1).fill(''),
    ]);
  };

  const handleResetFields = () => {
    setMatrixSize(2);
    setMatrixValues(Array.from({ length: 2 }, () => Array(2).fill('')));
  };

  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    setMatrixValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[rowIndex][colIndex] = value;
      return newValues;
    });
  };

  const rotateMatrix = (matrix: string[][]) => {
    const n = matrix.length;
    const rotatedMatrix = Array.from({ length: n }, () => Array(n).fill(''));
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        rotatedMatrix[n - col - 1][row] = matrix[row][col];
      }
    }
    return rotatedMatrix;
  };

  const rotatedMatrix = rotateMatrix(matrixValues);

  return (
    <main className={styles.square}>

      <h1>Girar matriz 90° en sentido anti horario</h1>

      <div className={styles.square__container}>

        <div
          className={styles.square__content}
          style={{
            gridTemplateColumns: `repeat(${matrixSize}, 1fr)`,
            gridTemplateRows: `repeat(${matrixSize}, 1fr)`
          }}
        >
          {matrixValues.map((row, rowIndex) =>
            row.map((value, colIndex) => (
              <SquareInput
                key={`${rowIndex}-${colIndex}`}
                aria-label={`Input ${rowIndex * matrixSize + colIndex + 1}`}
                value={value}
                onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
              />
            ))
          )}
        </div>

        <div
          className={styles.square__content}
          style={{
            gridTemplateColumns: `repeat(${matrixSize}, 1fr)`,
            gridTemplateRows: `repeat(${matrixSize}, 1fr)`
          }}
        >
          {rotatedMatrix.map((row, rowIndex) =>
            row.map((value, colIndex) => (
              <SquareInput
                key={`rotated-${rowIndex}-${colIndex}`}
                aria-label={`Input transformed ${rowIndex * matrixSize + colIndex + 1}`}
                value={value}
                disabled
              />
            ))
          )}
        </div>

      </div>

      <div className={styles.square__footer}>
        <BasicButton value='Agregar campos' onClick={handleAddFields} />
        <BasicButton value='Restaurar' variant='secondary' onClick={handleResetFields} />
      </div>

    </main>
  );
}
