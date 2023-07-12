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
        housePosition = new Vector(200, 200, 1);
        houses = []
        houses.push(new House(housePosition));

    }
    // this function will actually draw on the canvas
    function draw() {
        var i;
        mainContext.fillStyle = "#add8e6";
        // fill the canvas with light blue
        mainContext.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
        mainContext.lineWidth = 5;
        mainContext.lineJoin = 'round' ;     
        for (i = 0; i < houses.length; i+=1){
            houses[i].draw(mainContext);
        }
    }

    
    initialiseCanvasContext();
    draw();
}
window.addEventListener('load', onLoad, false);