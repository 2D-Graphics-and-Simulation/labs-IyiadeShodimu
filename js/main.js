// the window load event handler
function onLoad() {
    var mainCanvas, mainContext;
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

    }
    // this function will actually draw on the canvas
    function draw() {
        // set the draw fill style colour to black
        mainContext.fillStyle = "#000000";
        // fill the canvas with black
        mainContext.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
    }
    initialiseCanvasContext();
    draw();
}
window.addEventListener('load', onLoad, false);