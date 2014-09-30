/**
 * @constructor
 * @param {string} name
 * @param {string} postalCode
 * @param {string} city
 * @param {string} street
 * @param {string} houseNumber
 * @param {string} apartmentNumber
 * @param {string} contactPhone
 * @param {string} contactEmail
 */
function NeighbourAddress(name, postalCode, city, street, houseNumber, apartmentNumber, contactPhone, contactEmail) {
	this.name = name;
	this.postalCode = postalCode;
	this.city = city;
	this.street = street;
	this.houseNumber = houseNumber;
	this.apartmentNumber = apartmentNumber;
	this.contactPhone = contactPhone;
	this.contactEmail = contactEmail;
}


module.exports.NeighbourAddress = NeighbourAddress;