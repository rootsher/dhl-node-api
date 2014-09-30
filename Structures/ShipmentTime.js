/**
 * @constructor
 * @param {string} shipmentDate
 * @param {string} shipmentStartHour
 * @param {string} shipmentEndHour
 */
function ShipmentTime(shipmentDate, shipmentStartHour, shipmentEndHour) {
    this.shipmentDate = shipmentDate;
    this.shipmentStartHour = shipmentStartHour;
    this.shipmentEndHour = shipmentEndHour;
}


module.exports.ShipmentTime = ShipmentTime;