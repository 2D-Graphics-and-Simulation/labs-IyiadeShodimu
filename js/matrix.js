class Matrix {
    constructor(pA, pB, pC, pD, pE, pF, pG, pH, pI){
        this.mElements = [];
        this.mElements.push(pA);
        this.mElements.push(pB);
        this.mElements.push(pC);
        this.mElements.push(pD);
        this.mElements.push(pE);
        this.mElements.push(pF);
        this.mElements.push(pG);
        this.mElements.push(pH);
        this.mElements.push(pI);

    }
    getElement(pRow, pColumn){
        let index = pRow * 3 + pColumn;
        return this.mElements[index];
    }
    
    setElement(pRow, pColumn, pElement){
        let index = pRow * 3 + pColumn;
        this.mElements[index] = pElement;
    }
    static createIdentity() {
        return new Matrix(1, 0 , 0, 0, 1, 0, 0, 0, 1);
    }
    static createTranslation(pVector) {
        var idenMatrix = this.createIdentity();
        var X = pVector.getX() + idenMatrix.getElement(0, 2)
        var Y = pVector.getY() + idenMatrix.getElement(1, 2)
        var Z;
        if (pVector.getZ() == 1){
            Z = 1;
        }
        else{
            Z = pVector.getZ();
        }

        var translateMatrix = new Matrix(1, 0, X, 0, 1, Y, 0, 0, Z);

        return translateMatrix;
    }
    static createScale(pVector){
        var scaleMatrix = this.createIdentity();
        var row;
        var col;
        for (row = 0; row < 3; row+=1){
            for (col = 0; col < 3; col+=1){
                if (row == 0){
                    var X = pVector.getX() * scaleMatrix.getElement(row,col);
                    scaleMatrix.setElement(row, col, X);
                }
                else if (row == 1){
                    var Y = pVector.getY() * scaleMatrix.getElement(row,col);
                    scaleMatrix.setElement(row, col, Y);
                }
                else{
                    var Z = pVector.getZ() * scaleMatrix.getElement(row,col);
                    scaleMatrix.setElement(row, col, Z);
                }
            }

        }
        return scaleMatrix;
    }
    static createRotation(pScalar){
        var rotateMatrix = this.createIdentity();
        var sinAngle = Math.sin(pScalar);
        var cosAngle = Math.cos(pScalar);
        var row;
        var col;
        for (row = 0; row < 2; row+=1){
            for (col = 0; col < 2; col+=1){
                if (row == 0){
                    var X = (rotateMatrix.getElement(row, col) * cosAngle) - (rotateMatrix.getElement(row, col+1) * sinAngle);
                    rotateMatrix.setElement(row, col, X) 
                }
                else{
                    var Y = (rotateMatrix.getElement(row, col) * sinAngle) + (rotateMatrix.getElement(row, col+1) * cosAngle);
                    rotateMatrix.setElement(row, col, Y);
                }
            }
        }
        return rotateMatrix;
    }
}