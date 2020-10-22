// window.alert("hello,hope you enjoy");



// red circle
document.getElementById("changeGray").onclick = function () {
    document.getElementById("red-circle").style.background = 'gray';
}




//blue circle
document.getElementById("changePink").onclick = function () {
    document.getElementById("blue-circle").style.background = "deeppink";
}


//green circle
document.getElementById("changeGold").onclick = function () {
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





// text-input

var textInput = document.getElementById('text-input');
var saveButton = document.getElementById('save-button');

var SetText = () => {
    var text = textInput.value;
    result.innerHTML = text;

}
saveButton.addEventListener('click', SetText);





// increment & decrement counter

var counterText = document.getElementById("counter-text");
var btnIncrement = document.getElementById("btn-increment");
var btnDecrement = document.getElementById("btn-decrement");

var number = 4;

btnIncrement.addEventListener("click", function () {
    
    if (number < 100) {
        number++;
        counterText.innerHTML = number;
    }
});

btnDecrement.addEventListener("click", function () {

    if (number > 0) {
        number--;
        counterText.innerHTML = number;
    }

});


