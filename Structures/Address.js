/**
 * Opisywana struktura jest podstawowym obiektem służącym do przekazywania danych adresowych. Jest wykorzystywana na przykład przy przekazywaniu adresów nadania oraz doręczenia w metodzie createShipments.
 * @constructor
 * @param {string} name Nazwa firmy lub imię i nazwisko.
 * @param {string} postalCode Kod pocztowy, bez myślnika.
 * @param {string} city Nazwa miejscowości.
 * @param {string} street Ulica.
 * @param {string} houseNumber Numer domu.
 * @param {string} [apartmentNumber] Numer mieszkania.
 * @param {string} [contactPerson] Imię i nazwisko osoby kontaktowej.
 * @param {string} [contactPhone] Kontaktowy numer telefonu.
 * @param {string} [contactEmail] Kontaktowy adres email.
 */
function Address(name, postalCode, city, street, houseNumber, apartmentNumber, contactPerson, contactPhone, contactEmail) {
	this.name = name;
	this.postalCode = postalCode;
	this.city = city;
	this.street = street;
	this.houseNumber = houseNumber;
	this.apartmentNumber = apartmentNumber;
	this.contactPerson = contactPerson;
	this.contactPhone = contactPhone;
	this.contactEmail = contactEmail;
}


module.exports.Address = Address;