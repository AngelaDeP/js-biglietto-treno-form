let name = document.getElementById('name');

let buttonGenera = document.getElementById('genera');

buttonGenera.addEventListener('click',
    function() {

        //Regola funzione click
        const TicketPart = document.querySelector('.bottom-content');
        TicketPart.classList.add('active');

        // Inserimento nome
        document.getElementById('ins-name').innerHTML = name.value;

        // Inserimento numero random carrozza
        let numberWagon =  Math.floor(Math.random() * (9 - 1 +1)) +1;
        document.getElementById('wagon-number').innerHTML = numberWagon;

        // Inserimento numero random codice
        let numberCP =  Math.floor(Math.random() * (99999 - 90000 +1)) +90000;
        document.getElementById('cp-number').innerHTML = numberCP;

        // Inserimento prezzo biglietto
        let age = document.getElementById('age').value;
        let km = document.getElementById('km');
        let price = 0.21 * km.value;
        console.log(price);

        if (age == 1) {

            let discountMin = price*20/100;
            let priceMin = price - discountMin;
            document.getElementById('ticket-price').innerHTML = Math.round(priceMin * 100)/100 + "\u20AC";
            console.log(priceMin);
        
        } else if (age == 3) {
        
            let discountOver = price*40/100;
            let priceOver = price - discountOver;
            document.getElementById('ticket-price').innerHTML = Math.round(priceOver * 100)/100 + "\u20AC";
            console.log(priceOver);
        
        } else {
        
            document.getElementById('ticket-price').innerHTML = Math.round(price * 100)/100 + "\u20AC";
            console.log(price);
        
        }
    }

)