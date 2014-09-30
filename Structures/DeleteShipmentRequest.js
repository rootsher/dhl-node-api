/**
 * @constructor
 * @param {string} shipmentIdentificationNumber
 * @param {string} dispatchIdentificationNumber
 */
function DeleteShipmentRequest(shipmentIdentificationNumber, dispatchIdentificationNumber) {
    this.shipmentIdentificationNumber = shipmentIdentificationNumber;
    this.dispatchIdentificationNumber = dispatchIdentificationNumber;
}


module.exports.DeleteShipmentRequest = DeleteShipmentRequest;