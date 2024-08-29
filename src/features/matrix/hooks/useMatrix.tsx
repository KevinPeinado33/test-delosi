import { useState } from 'react';
import { toast } from 'sonner';

import { fillMatrix, rotateMatrix } from '../utils';
import { MAX_NUM_SIZE, REGEX_STRANGE_CHARACTERS } from '../constants';

export const useMatrix = ( initialSize: number ) => {

    const [matrixSize, setMatrixSize] = useState( initialSize );
    const [matrixValues, setMatrixValues] = useState< string[][] >(fillMatrix(matrixSize));
    const [error, setError] = useState<string | null>(null);

    const handleAddFields = () => {
      if (matrixSize >= MAX_NUM_SIZE) {
        toast.error('No se puede agregar mas campos!')
        return;
      }

      setMatrixSize(( prevSize ) => prevSize + 1);
      setMatrixValues(( prevValues ) => [
        ...prevValues.map(( row ) => [ ...row, '' ]),
        Array( prevValues.length + 1 ).fill(''),
      ]);
    };
  
    const handleResetFields = () => {
      setMatrixSize(initialSize);
      setMatrixValues(fillMatrix(initialSize));
      setError(null);
    };
  
    const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
      const isRegexValid = REGEX_STRANGE_CHARACTERS.test(value);

      setMatrixValues(( prevValues ) => {
        const newValues = [ ...prevValues ];
        newValues[ rowIndex ][ colIndex ] = value;
        
        return newValues;
      });

      if (!isRegexValid) {
        setError('Solo se permiten letras y números!');
        return;
      }

      setError(null);
    };
  
    const rotatedMatrix = rotateMatrix( matrixValues );
    
    return {
        handleAddFields,
        handleResetFields,
        matrixValues,
        matrixSize,
        handleInputChange,
        rotatedMatrix,
        error
    };
    
}
