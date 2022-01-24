let name = document.getElementById('name');
let km = document.getElementById('km');
let age = document.getElementById('age');
let price = 0.21 * km;

let buttonGenera = document.getElementById('genera');

buttonGenera.addEventListener('click',
    function() {

        // Inserimento nome
        document.getElementById('ins-name').innerHTML = name.value;

        // Inserimento numero random carrozza
        let numberWagon =  Math.floor(Math.random() * (9 - 1 +1)) +1;
        document.getElementById('wagon-number').innerHTML = numberWagon;

        // Inserimento numero random codice
        let numberCP =  Math.floor(Math.random() * (99999 - 90000 +1)) +90000;
        document.getElementById('cp-number').innerHTML = numberCP;

    }

)