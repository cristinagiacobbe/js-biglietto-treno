/* Il programma dovrà chiedere all'utente di inserire:
- numero chilometri da percorrere
- età del passeggero

Deve poi calcolare il prezzo del biglietto alle seguenti condizioni:
- il costo del biglietto è 0,21€/Km
- il biglietto è scontato del 20% per passeggeri <18
- il biglietto è scontato del 40% per passeggeri >65

Stampare in pagina il prezzo finale del biglietto espresso con 2 decimali */

//TOOLS
//const: number_km, passenger_age, ticket_price
//prompt to ask user km and age
//3 conditions for discount
//calculate ticket_price (conditional result)
//document in html

//ask to user number km of travel
const number_km = parseInt(prompt("Inserire il numero di chilometri che si vogliono percorrere"));
console.log(number_km);

//ask to user passenger_age
const passenger_age = prompt("Inserire l'età del passeggero");
console.log(passenger_age);

//define ticket_price (without value)
let ticket_price 

if (passenger_age < 18) {
    let ticket_price = (number_km * 0.21 - 20/100 * (number_km * 0.21));
    console.log(ticket_price);
    const messageElement = document.getElementById("message").innerHTML = `Il prezzo del biglietto è di € ${ticket_price.toFixed(2)}`


} else if (passenger_age > 65) {
    let ticket_price = (number_km * 0.21 - 40/100 * (number_km * 0.21));    
    console.log(ticket_price)
    const messageElement = document.getElementById("message").innerHTML = `Il prezzo del biglietto è di € ${ticket_price.toFixed(2)}`

} else {
const ticket_price = (number_km * 0.21);
console.log(ticket_price);
const messageElement = document.getElementById("message").innerHTML = `Il prezzo del biglietto è di € ${ticket_price.toFixed(2)}`
}
