export const rotateMatrix = (matrixIn: string[][]) => {
    
    const matrixLength = matrixIn.length;

    const rotatedMatrix = Array
        .from(
            { 
                length: matrixLength 
            }, 
            () => Array( matrixLength ).fill('')
        );
    
    for (let row = 0; row < matrixLength; row++) {
        for (let col = 0; col < matrixLength; col++) {
            rotatedMatrix[ matrixLength - col - 1 ][ row ] = matrixIn[ row ][ col ];
        }
    }
    
    return rotatedMatrix;
};
