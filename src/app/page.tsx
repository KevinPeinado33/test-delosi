"use client";
import { MatrixControls, SquareGrid, useMatrix } from '@/features/matrix';

import styles from './page.module.scss';
import { ErrorLine } from '@/shared/components/atoms/messages';

export default function Home() {

  const {
    handleAddFields,
    handleResetFields,
    matrixValues,
    matrixSize,
    handleInputChange,
    rotatedMatrix,
    error
  } = useMatrix( 2 );
  
  return (
    <main className={styles.square}>

      <h1 className ={styles.square__title}>Girar matriz 90° en sentido antihorario</h1>


      <MatrixControls 
        onAddField={handleAddFields} 
        onResetField={handleResetFields} 
      />
      
      <div className={styles.square__container}>

        <SquareGrid
          matrix={matrixValues}
          matrixSize={matrixSize}
          onInputChange={handleInputChange}
        />

        { error && <ErrorLine message={error} /> }
        
        <SquareGrid
          matrix={rotatedMatrix}
          matrixSize={matrixSize}
          isDisabled
        />

      </div>

    </main>
  );
}
