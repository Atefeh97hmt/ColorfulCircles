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





// text-input

var textInput = document.getElementById('text-input');
var saveButton = document.getElementById('save-button');

var SetText = () => {
    var text = textInput.value;
    result.innerHTML = text;

}
saveButton.addEventListener('click', SetText);





// increment & decrement counter

// var counterText = document.getElementById("counter-text");

// var btnIncrement = document.getElementById("btn-increment");
// var btnDecrement = document.getElementById("btn-decrement");

// var number = 4;

// btnIncrement.addEventListener("click", function() {

//     if (number < 100) {
//         number++;
//         counterText.innerHTML = number;
//     }

// });

// btnDecrement.addEventListener("click", function() {

//     if (number > 0) {
//         number--;
//         counterText.innerHTML = number;
//     }


// });


// var apply = () => {
//     var submitButton = document.getElementById('submit-button');
//     let countertext = document.querySelector(".demo");
//     let btnDecrement = document.getElementById('btn-decrement').value;
//     let btnincrement = document.getElementById('btn-increment').value;

//     document.getElementById('btn-decrement').value = parseInt(btndecrement) + parseInt(btnincrement);
// }
// submitButton.addEventListener('click', apply);





// increment & decrement counter
var counterValue = document.getElementById("counter-value");
var counterText = document.getElementById("counter-text");
var btnIncrement = document.getElementById("btn-increment");
var btnDecrement = document.getElementById("btn-decrement");
var submitButton = document.getElementById("submit-button");
var submitButtonStatus = false;

var number = -1;

// var valueHolder = parseInt(counterText.innerHTML);

if (number < 100) {
    number = number + 1;
    counterText.innerHTML = number;
}

btnIncrement.addEventListener("click", function() {
    if (submitButtonStatus === true) {
        if (parseInt(counterText.innerHTML) < 100) {
            counterText.innerHTML =
                parseInt(counterText.innerHTML) + parseInt(counterValue.value);
            if (counterText.innerHTML > 100) {
                counterText.innerHTML = 0
            }
        }
    } else if (submitButtonStatus === false) {
        if (number < 100) {
            number = number + 1;
            counterText.innerHTML = number;
        }
    }
});

btnDecrement.addEventListener("click", function() {
    if (submitButtonStatus === true) {
        if (parseInt(counterText.innerHTML) > 0) {
            counterText.innerHTML =
                parseInt(counterText.innerHTML) - parseInt(counterValue.value);
        }
    } else if (submitButtonStatus === false) {
        if (number > 0) {
            number = number - 1;
            counterText.innerHTML = number;
        }
    }



});



// submitButton.addEventListener("click", function() {
//     if (counterValue.value <= 100 && counterValue.value >= 0) {
//         submitButtonStatus = true;
//         counterText.innerHTML = parseInt(counterValue.value);
//         submitButton.style.backgroundColor = 'black';
//     } else if (submitButtonStatus === false) {
//         submitButton.style.backgroundColor = 'red';
//         alert("just in the range of 0-100");

//     }
// });

function SubmitChangeColor() {

    submitButtonStatus = false;
    if (counterValue.value <= 100 && counterValue.value >= 0) {
        submitButtonStatus = true;
        submitButton.style.backgroundColor = 'black';
    } else if (submitButtonStatus === false) {
        submitButton.style.backgroundColor = 'red';
        // alert("just in the range of 0-100");

    }
}




submitButton.addEventListener("click", function() {

    if (counterValue.value <= 100 && counterValue.value >= 0) {
        submitButtonStatus = true;
        counterText.innerHTML = parseInt(counterValue.value);
    }
});