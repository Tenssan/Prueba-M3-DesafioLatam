function onlyNumbers(input) {
    var regex = /^[0-9]+$/;
    return regex.test(input);
}

function fillHeroSection(id){
    $(document).ready(function(){
        $('#heroData').heroData(id);
    });
    $(document).ready(function(){
        $('#heroImg').heroImg(id);
    });
};

function fillHeroStatsChart(id){
    $(document).ready(function(){
        $('#heroChart').heroStatsChart(id);
    });
}

function handleSubmit(event) {
    event.preventDefault();

    var flag = true;
    var idInput = document.getElementById('heroIdInput').value;
    var idInput = parseInt(idInput);
    var errorDisplay = document.querySelector('.errorId');

    if (idInput.value === '' || !onlyNumbers(idInput)) {
        document.querySelector('.errorId').innerHTML = 'El ID es requerido y debe ser un número positivo';
        flag = false;
    } else if (idInput > 731) {
        document.querySelector('.errorId').innerHTML = 'El ID no debe ser mayor a 731';
        flag = false;
    } else if (idInput === 0) {
        document.querySelector('.errorId').innerHTML = 'El ID no debe ser 0';
        flag = false;
    } else {
        errorDisplay.innerHTML = '';
    }

    if (flag) {
        //document.querySelector('.successId').innerHTML = 'ID enviado con éxito !!!';
        fillHeroSection(idInput);
        fillHeroStatsChart(idInput);
    }
}

var button = document.getElementById('confirmIdButton');
button.addEventListener('click', handleSubmit);