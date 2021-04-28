
//1. chiedi all’utente il cognome
var userLastName = prompt("Per favore inserisci il tuo cognome").toUpperCase();
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var lastNameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

lastNameList.push(userLastName);

//3. stampa la lista ordinata alfabeticamente
console.log(lastNameList.sort());

//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var outputText = "";

for (var i = 0; i < lastNameList.length; i++){
    
    var sortedList = lastNameList.sort();
    var uppered = sortedList[i].toUpperCase();
    console.log(uppered);
    outputText += "Sei in posizione n " + (i +1) + " " + uppered + "<br>";
}
document.writeln(outputText)