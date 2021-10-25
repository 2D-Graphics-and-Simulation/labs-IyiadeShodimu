class Vector {
    constructor(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }
    getX() {
        return this.mX;
    }
    setX(pX) {
        this.mX = pX;
    }
    getY() {
        return this.mY;
    }
    setY(pY) {
        this.mY = pY
    }
    getZ() {
        return this.mZ;
    }
    setZ(pZ) {
        this.mZ = pZ;
    }
    add(pVector) {
        var x = pVector.getX();
        var y = pVector.getY();
        var z = pVector.getZ();
        x = this.getX() + x;
        y = this.getY() + y;
        z = this.getZ() + z;

        var vector = new Vector(x, y, z);

        return vector;
    }
    subtract(pVector) {
        var x = pVector.getX();
        var y = pVector.getY();
        var z = pVector.getZ();
        x = this.getX() - x;
        y = this.getY() - y;
        z = this.getZ() - z;

        var vector = new Vector(x, y, z);

        return vector;
    }
}