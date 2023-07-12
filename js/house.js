class House {
    constructor(pPosition){
         this.setPosition(pPosition);
    }

getPosition() {
    return this.mPosition;
}
setPosition(pPosition) {
    this.mPosition = pPosition;
}
drawWall(pContext){
    pContext.beginPath();
    pContext.fillStyle = "#ffffff";
    pContext.moveTo(this.getPosition().getX() - 100, this.getPosition().getY());
    pContext.lineTo(this.getPosition().getX() + 100, this.getPosition().getY());
    pContext.lineTo(this.getPosition().getX() + 100, this.getPosition().getY() + 100);
    pContext.lineTo(this.getPosition().getX() - 100, this.getPosition().getY() + 100);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
}
drawRoof(pContext) {
    pContext.beginPath();
    pContext.fillStyle = "#ff0000";
    pContext.moveTo(this.getPosition().getX() - 100, this.getPosition().getY());
    pContext.lineTo(this.getPosition().getX(), this.getPosition().getY() - 100);
    pContext.lineTo(this.getPosition().getX() + 100, this.getPosition().getY());
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
}
drawDoor(pContext) {
    pContext.beginPath();
    pContext.fillStyle = "#a63f00";
    pContext.moveTo(this.getPosition().getX() - 25, this.getPosition().getY() + 100);
    pContext.lineTo(this.getPosition().getX() - 25, this.getPosition().getY() + 25);
    pContext.lineTo(this.getPosition().getX() + 25, this.getPosition().getY() + 25);
    pContext.lineTo(this.getPosition().getX() + 25, this.getPosition().getY() + 100);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
}
drawLeftWindow(pContext) {
    pContext.beginPath();
    pContext.fillStyle = "#0000ff";
    pContext.moveTo(this.getPosition().getX() - 80, this.getPosition().getY() + 75);
    pContext.lineTo(this.getPosition().getX() - 80, this.getPosition().getY() + 25);
    pContext.lineTo(this.getPosition().getX() - 50, this.getPosition().getY() + 25);
    pContext.lineTo(this.getPosition().getX() - 50, this.getPosition().getY() + 75);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
}
drawRightWindow(pContext) {
    pContext.beginPath();
    pContext.fillStyle = "#0000ff";
    pContext.moveTo(this.getPosition().getX() + 80, this.getPosition().getY() + 75);
    pContext.lineTo(this.getPosition().getX() + 80, this.getPosition().getY() + 25);
    pContext.lineTo(this.getPosition().getX() + 50, this.getPosition().getY() + 25);
    pContext.lineTo(this.getPosition().getX() + 50, this.getPosition().getY() + 75);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
}
draw(pContext) {
        this.drawWall(pContext);  
        this.drawRoof(pContext);     
        this.drawDoor(pContext);
        this.drawLeftWindow(pContext);
        this.drawRightWindow(pContext);
}
}