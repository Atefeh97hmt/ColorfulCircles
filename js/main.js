// window.alert("hello,hope you enjoy");



// red circle
document.getElementById("changeGray").onclick = function() {
    document.getElementById("red-circle").style.background = 'gray';
}




//blue circle
document.getElementById("changePink").onclick = function() {
    document.getElementById("blue-circle").style.background = "deeppink";
}


//green circle
document.getElementById("changeGold").onclick = function() {
    document.getElementById("green-circle").style.background = 'gold';

}



//rectangle width & height set

var widthInput = document.getElementById('width-input');
var heightInput = document.getElementById('height-input');
var changeButton = document.getElementById('change-button');

var applyValues = () => {

    var width = widthInput.value + "px";
    var height = heightInput.value + "px";

    rectangleResult.style.width = width;
    rectangleResult.style.height = height;
}

changeButton.addEventListener('click', applyValues);