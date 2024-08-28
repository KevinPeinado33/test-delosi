import { FC, memo } from 'react';

import { SquareInput } from '@/shared/components/atoms/inputs';

import styles from './SquareGrid.module.scss';

interface Props {
  matrix: string[][]
  matrixSize: number
  onInputChange?: (rowIndex: number, colIndex: number, value: string) => void
  isDisabled?: boolean
}

const SquareGridComponent: FC< Props > = ({ matrix, matrixSize, onInputChange, isDisabled }) => {
  
  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    if (onInputChange) {
      onInputChange(rowIndex, colIndex, value);
    }
  }

  return (
    <div
      className={styles.square__content}
      style={{
        gridTemplateColumns: `repeat(${matrixSize}, 1fr)`,
        gridTemplateRows: `repeat(${matrixSize}, 1fr)`
      }}
    >
      {matrix.map((row, rowIndex) =>
        row.map((value, colIndex) => (

          <SquareInput
            key={`${rowIndex}-${colIndex}`}
            aria-label={`Square-input-${rowIndex * matrixSize + colIndex + 1}`}
            onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
            value={value}
            disabled={isDisabled}
          />

        ))
      )}
    </div>
  )
}

export const SquareGrid = memo( SquareGridComponent );
