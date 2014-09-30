/**
 * @constructor
 * @param {PreavisoContact} preaviso
 * @param {PreavisoContact} contact
 * @param {Address} address
 */
function Addressat(preaviso, contact, address) {
	this.preaviso = preaviso;
	this.contact = contact;
	this.address = address;
}


module.exports.Addressat = Addressat;