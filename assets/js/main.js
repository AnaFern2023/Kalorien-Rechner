console.log("hey");

const inputHeight = document.getElementById("inputHeight");
const inputAge = document.getElementById("inputAge");
const inputWeight = document.getElementById("inputWeight");
const femaleBody = document.getElementById("femaleBody");
const maleBody = document.getElementById("maleBody");
const inputActivity = document.getElementById("inputActivity");

const submitButton = () => {
    console.log(inputActivity.value);
    if (femaleBody.checked) {
        let grundumsatzKcal = 664.7 + (13.7 * inputWeight.value) + (5 * inputHeight.value) - (6.8 * inputWeight.value);
        baseKcal.innerHTML = grundumsatzKcal.toFixed(0);
        let grundumsatzKj = grundumsatzKcal * 4.184;
        baseKj.innerHTML = grundumsatzKj.toFixed(0);
        if (inputActivity.value == "0.95") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        } else if (inputActivity.value == "1.2") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        } else if (inputActivity.value == "1.5") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        } else if (inputActivity.value == "1.7") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        } else if (inputActivity.value == "1.9") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        } else if (inputActivity.value == "2.2") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        }

    } else {
        let grundumsatzKcal = 655.1 + (9.6 * inputWeight.value) + (1.8 * inputHeight.value) - (4.7 * inputWeight.value);
        baseKcal.innerHTML = grundumsatzKcal.toFixed(0);
        let grundumsatzKj = grundumsatzKcal * 4.184;
        baseKj.innerHTML = grundumsatzKj.toFixed(0);
        if (inputActivity.value == "0.95") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        } else if (inputActivity.value == "1.2") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        } else if (inputActivity.value == "1.5") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        } else if (inputActivity.value == "1.7") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        } else if (inputActivity.value == "1.9") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        } else if (inputActivity.value == "2.2") {
            totalKcal.innerHTML = (grundumsatzKcal * inputActivity.value).toFixed(0);
            totalKj.innerHTML = (grundumsatzKj * inputActivity.value).toFixed(0);
        }
    }
}