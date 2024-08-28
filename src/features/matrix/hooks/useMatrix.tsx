import { useState } from 'react';

import { fillMatrix, rotateMatrix } from '../utils';

export const useMatrix = ( initialSize: number ) => {

    const [matrixSize, setMatrixSize] = useState( initialSize );
    const [matrixValues, setMatrixValues] = useState< string[][] >(
      Array.from({ length: matrixSize }, () => Array( matrixSize ).fill(''))
    );
  
    const handleAddFields = () => {
      setMatrixSize(( prevSize ) => prevSize + 1);
      setMatrixValues(( prevValues ) => [
        ...prevValues.map(( row ) => [ ...row, '' ]),
        Array( prevValues.length + 1 ).fill(''),
      ]);
    };
  
    const handleResetFields = () => {
      setMatrixSize(initialSize);
      setMatrixValues(fillMatrix(initialSize));
    };
  
    const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
      setMatrixValues(( prevValues ) => {
        const newValues = [ ...prevValues ];
        newValues[ rowIndex ][ colIndex ] = value;
        
        return newValues;
      });
    };
  
    const rotatedMatrix = rotateMatrix( matrixValues );
    
    return {
        handleAddFields,
        handleResetFields,
        matrixValues,
        matrixSize,
        handleInputChange,
        rotatedMatrix,
    };
    
}
