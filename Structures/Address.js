/**
 * @constructor
 * @param {string} name Nazwa firmy lub imię i nazwisko.
 * @param {string} postalCode Kod pocztowy, bez myślnika.
 * @param {string} city Nazwa miejscowości.
 * @param {string} street Ulica.
 * @param {string} houseNumber Numer domu.
 * @param {string} apartmentNumber Numer mieszkania.
 */
function Address(name, postalCode, city, street, houseNumber, apartmentNumber) {
    this.name = name;
    this.postalCode = postalCode;
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;
    this.apartmentNumber = apartmentNumber;
}


module.exports.Address = Address;