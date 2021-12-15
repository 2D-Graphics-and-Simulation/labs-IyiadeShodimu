// the window load event handler
function onLoad() {
    var mainCanvas, mainContext, housePosition, houses;
    // This function will initialise our variables
    function initialiseCanvasContext() {
        // Find the canvas element using its id attribute.
        mainCanvas = document.getElementById('mainCanvas');
        // if it couldn't be found 
        if (!mainCanvas) {
            // make a message box pop up with the error.
            alert('Error: I cannot find the canvas element!');
            return;
        }
         // Get the 2D canvas context.
         mainContext = mainCanvas.getContext('2d');
         if (!mainContext) {
             alert('Error: failed to get context!');
             return;
         }
        housePosition = new Vector(150, 100, 1);
        houses = []
        houses.push(new House(housePosition));

    }
    // this function will actually draw on the canvas
    function draw() {
        // set the draw fill style colour to black
        mainContext.fillStyle = "#cccccc";
        // fill the canvas with black
        mainContext.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
        mainContext.lineWidth = 5;
        mainContext.lineJoin = 'round' ;     
        drawWall(mainContext);  
        drawRoof(mainContext);     
        drawDoor(mainContext);
        drawLeftWindow(mainContext);
        drawRightWindow(mainContext);
    }
    function drawWall(pContext) {
        pContext.beginPath();
        pContext.fillStyle = "#ffffff";
        pContext.moveTo(200, 200);
        pContext.lineTo(400, 200);
        pContext.lineTo(400, 300);
        pContext.lineTo(200, 300);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    }
    function drawRoof(pContext) {
        pContext.beginPath();
        pContext.fillStyle = "#ff0000";
        pContext.moveTo(200, 200);
        pContext.lineTo(300, 100);
        pContext.lineTo(400, 200);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    }
    function drawDoor(pContext) {
        pContext.beginPath();
        pContext.fillStyle = "#ffffff";
        pContext.moveTo(275, 300);
        pContext.lineTo(275, 225);
        pContext.lineTo(325, 225);
        pContext.lineTo(325, 300);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    }
    function drawLeftWindow(pContext) {
        pContext.beginPath();
        pContext.fillStyle = "#0000ff";
        pContext.moveTo(220, 275);
        pContext.lineTo(220, 225);
        pContext.lineTo(250, 225);
        pContext.lineTo(250, 275);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    }
    function drawRightWindow(pContext) {
        pContext.beginPath();
        pContext.fillStyle = "#0000ff";
        pContext.moveTo(350, 275);
        pContext.lineTo(350, 225);
        pContext.lineTo(380, 225);
        pContext.lineTo(380, 275);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    }
    initialiseCanvasContext();
    draw();
}
window.addEventListener('load', onLoad, false);