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
    static createIdentity() {
        return new Matrix(1, 0 , 0, 0, 1, 0, 0, 0, 1);
    }
}