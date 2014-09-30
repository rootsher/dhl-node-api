/**
 * @constructor
 * @param {string} personName
 * @param {string} phoneNumber
 * @param {string} emailAddress
 */
function PreavisoContact(personName, phoneNumber, emailAddress) {
	this.personName = personName;
	this.phoneNumber = phoneNumber;
	this.emailAddress = emailAddress;
}


module.exports.PreavisoContact = PreavisoContact;