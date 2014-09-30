/**
 * @constructor
 * @param {PreavisoContact} preaviso
 * @param {PreavisoContact} contact
 * @param {ReceiverAddress} address
 */
function ReceiverAddressat(preaviso, contact, address) {
    this.preaviso = preaviso;
    this.contact = contact;
    this.address = address;
}


module.exports.ReceiverAddressat = ReceiverAddressat;