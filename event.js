
(function(){
"use strict";

var selectedElement = null;
var clickedElement =null;
var elHeight = 0;
var elWidth = 0;

    document.onmousedown = function (event) {
        selectedElement = event.target;
        clickedElement = selectedElement.tagName;
        elHeight = selectedElement.clientHeight;
        elWidth = selectedElement.clientWidth;
        console.log(clickedElement, elHeight, elWidth);
    };

    document.onmousemove = function (event) {

        if ( selectedElement && (clickedElement == 'DIV')) {
            var xB = event.pageX;
            var yB = event.pageY;
            selectedElement.style.background= 'yellow';
            selectedElement.style.position = "absolute";
            selectedElement.style.left = xB-(elWidth/2) + 'px';
            selectedElement.style.top = yB-(elHeight/2) + 'px';
        }
    };

    document.onmouseup = function (event) {
        selectedElement.style.background= 'green';
        selectedElement = null;
       
    };

})();

