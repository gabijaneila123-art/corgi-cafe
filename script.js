const forma = document.getElementById("kontaktine-forma");

if (forma) {
    forma.addEventListener("submit", (event) => {
        event.preventDefault();

        alert("Ačiū! Jūsų forma sėkmingai išsiųsta 😊");
        forma.reset();
    });
}

var list = document.getElementById('popular-drinks');

if (list) {
    var newItemLast = document.createElement('li');
    var newTextLast = document.createTextNode('Chocolate swirl');
    newItemLast.appendChild(newTextLast);
    list.appendChild(newItemLast);
}

function offerExpires(today) {
    var weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    var dayNames = ['Sekmadienio', 'Pirmadienio', 'Antradienio', 'Trečiadienio', 'Ketvirtadienio', 'Penktadienio', 'Šeštadienio'];
    var monthNames = ['sausio', 'vasario', 'kovo', 'balandžio', 'gegužės', 'birželio', 'liepos', 'rugpjūčio', 'rugsėjo', 'spalio', 'lapkričio', 'gruodžio'];

    var day = dayNames[weekFromToday.getDay()];
    var date = weekFromToday.getDate();
    var month = monthNames[weekFromToday.getMonth()];
    var year = weekFromToday.getFullYear();

    var expiryMsg = '🔥 <strong>50% nuolaida Corgi latte!</strong><br>';
    expiryMsg += 'Galioja iki ' + day + ' (' + year + ' ' + month + ' ' + date + ')';

    return expiryMsg;
}

var today = new Date();
var elEnds = document.getElementById('offer');

elEnds.innerHTML = offerExpires(today);


