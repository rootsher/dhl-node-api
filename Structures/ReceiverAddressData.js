/**
 * @constructor
 * @param {string} country Nazwa kraju - obecnie możliwe są opcje PL - Polska oraz DE - Niemcy.
 * @param {boolean} isPackstation Czy przesyłka ma trafić do niemieckiego paczkomatu.
 * @param {boolean} isPostfiliale Czy przesyłka ma trafić do niemieckiej placówki pocztowej.
 * @param {string} postnummer Dziesięciocyfrowy numer klienta niemieckiego.
 * @param {string} name Nazwa firmy lub imię i nazwisko.
 * @param {string} postalCode Kod pocztowy, bez myślnika.
 * @param {string} city Nazwa miejscowości.
 * @param {string} street Ulica.
 * @param {string} houseNumber Numer domu.
 * @param {string} apartmentNumber Numer mieszkania.
 * @param {string} contactPerson Imię i nazwisko osoby kontaktowej.
 * @param {string} contactPhone Kontaktowy numer telefonu.
 * @param {string} contactEmail Kontaktowy adres email.
 */
function ReceiverAddressData(country, isPackstation, isPostfiliale, postnummer, name, postalCode, city, street, houseNumber, apartmentNumber, contactPerson, contactPhone, contactEmail) {
	this.country = country;
	this.isPackstation = isPackstation;
	this.isPostfiliale = isPostfiliale;
	this.postnummer = postnummer;
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


module.exports.ReceiverAddressData = ReceiverAddressData;