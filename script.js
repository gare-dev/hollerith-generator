document.getElementById('yesRadio').addEventListener('click', function () {
    document.getElementById('hasChild').removeAttribute('hidden');
})

document.getElementById('noHoraExtra').addEventListener('click', function () {
    document.getElementById('howManyHours').removeAttribute('hidden');
})

document.getElementById('noFeriado').addEventListener('click', function () {
    document.getElementById('quantasHoras').removeAttribute('hidden');
})

document.getElementById('muitasHoras').addEventListener('click', function () {
    document.getElementById('quantasHoras').removeAttribute('hidden');
})

